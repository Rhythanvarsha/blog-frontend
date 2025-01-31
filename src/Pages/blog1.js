import React, { useState } from "react";
import "./MyBlogs.css";
import blogImage from '../assests/icons.webp';

const Blog1 = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [shareCount, setShareCount] = useState(0);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleLikeToggle = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleShare = () => {
    setShareCount(shareCount + 1);
    alert("Blog shared successfully!");
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1 className="blog-title">Understanding JavaScript Closures</h1>
        <p className="blog-meta">
          <span className="author">By J Rhythan Varsha</span> | <span>October 30, 2025</span>
        </p>
      </header>

      <article className="blog-content">
        <img
          src={blogImage}
          alt="Blog Banner"
          className="blog-image"
        />
        <p>
          Closures are an important concept in JavaScript, allowing functions to
          retain access to their lexical scope even when executed outside their
          original context.
        </p>
        <pre>
          {`function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(\`Outer: \${outerVariable}, Inner: \${innerVariable}\`);
  };
}

const closureExample = outerFunction("Hello");
closureExample("World"); // Output: Outer: Hello, Inner: World`}
        </pre>
        <p>
          The inner function still has access to the `outerVariable` even after
          `outerFunction` has finished execution. This is a closure in action!
        </p>

        <h3>Simple JavaScript Examples</h3>
        
        <h4>Array Manipulation</h4>
        <p>
          Here are some basic examples of array methods in JavaScript:
        </p>
        <pre>
          {`const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]
const sum = numbers.reduce((total, num) => total + num, 0); // 15`}
        </pre>

        <h4>Function Declaration vs Expression</h4>
        <p>
          A function can be declared using either a declaration or an expression:
        </p>
        <pre>
          {`// Function Declaration
function greet() {
  console.log("Hello!");
}

// Function Expression
const sayGoodbye = function() {
  console.log("Goodbye!");
};`}
        </pre>

        <h4>Object Destructuring</h4>
        <p>
          You can easily extract values from an object using destructuring:
        </p>
        <pre>
          {`const person = { name: "John", age: 30, country: "USA" };
const { name, age } = person; // name = "John", age = 30`}
        </pre>
      </article>

      <section className="social-interaction">
        <div className="like-section">
          <button
            className={`like-button ${isLiked ? "liked" : ""}`}
            onClick={handleLikeToggle}
          >
            {isLiked ? "Unlike" : "Like"} ({likes})
          </button>
        </div>
        
      </section>

      <section className="comments-section">
        <h2 className="comments-title">Comments</h2>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <textarea
            className="comment-input"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            aria-label="Add a comment"
          ></textarea>
          <button className="comment-submit" type="submit">
            Post Comment
          </button>
        </form>
        <div className="comments-list">
          {comments.length === 0 ? (
            <p>No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="comment-item">
                {comment}
              </div>
            ))
          )}
        </div>
      </section>

      <section className="related-posts">
        
        <ul className="related-posts-list">
          <li className="related-post-item">

          </li>
        </ul>
      </section>

      <section className="author-profile">
        
        <div className="author-bio">
          
        </div>
      </section>

      <a href="/myblogs" className="back-to-blogs">
        &larr; Back to All Blogs
      </a>
    </div>
  );
};

export default Blog1;
