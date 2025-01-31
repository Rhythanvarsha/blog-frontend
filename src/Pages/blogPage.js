import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './blogPage.css'; // Make sure this CSS file exists
import blogImage from '../assests/icons.webp';

const BlogPage = () => {
  const { id } = useParams();  // Fetch blog post ID from URL

  // Example blog posts data (you can replace this with dynamic data fetching)
  const blogPosts = {
    1: {
      title: "How to Build a Simple Website",
      content: "In this post, we will learn how to build a simple website using HTML and CSS. We'll start from the basics and move to more advanced concepts. The website will include a homepage, navigation bar, and a contact form.",
      author: "Rhythan Varsha",
      date: "January 30, 2025",
      image: "../assests/icons.webp", // Add image path
    },
    2: {
      title: "The Ultimate Guide to Blogging",
      content: "Blogging is an amazing way to express your ideas and share your knowledge with the world. In this guide, we’ll explore blogging strategies, how to start a blog, and how to attract readers to your content.",
      author: "John Smith",
      date: "January 28, 2025",
      image: "../assests/icons.webp", // Add image path
    },
  };

  // State hooks (must be called unconditionally)
  const [comments, setComments] = useState([]);  // Local state to store comments
  const [newComment, setNewComment] = useState('');
  const post = blogPosts[id];  // Get the post by ID

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  if (!post) {
    return <p className="not-found">Blog post not found!</p>;
  }

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1 className="blog-title">{post.title}</h1>
        <div className="blog-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{post.date}</span>
        </div>
      </header>

      <div className="blog-content">
        <img src={blogImage} alt={post.title} className="blog-image" />
        <p>{post.content}</p>
      </div>

      <section className="comments-section">
        <h3 className="comments-title">Comments</h3>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            className="comment-input"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          ></textarea>
          <button type="submit" className="comment-submit">Submit</button>
        </form>
        
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment-item">
                <p>{comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="related-posts">
        <h3>Related Posts</h3>
        <ul className="related-posts-list">
          <li className="related-post-item">
            <Link to="/blog1" className="related-post-link">  Click to view Basics in JS</Link>
          </li>
          <li className="related-post-item">
            <Link to="/blog2" className="related-post-link">The Ultimate Guide to Blogging</Link>
          </li>
        </ul>
      </section>

      {/* Back to All Blogs */}
      <Link to="/myblogs" className="back-to-blogs">Back to All Blogs</Link>
    </div>
  );
};

export default BlogPage;
