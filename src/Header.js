import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import myBlogsImage from './assests/my blogs.png';

const Header = ({ onLogout }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const popularPosts = [
    {
      id: 1,
      title: 'How to Build a Simple Website',
      description: 'Learn how to build a simple website with HTML and CSS.',
      content: 'In this guide, we cover the essentials of web development, including HTML structure, CSS styling, and responsive design techniques.',
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Blogging',
      description: 'Everything you need to know about blogging, from the basics to advanced strategies.',
      content: 'Blogging is an excellent way to express your thoughts. This guide will walk you through content creation, SEO optimization, and audience engagement.',
    },
  ];

  const categories = {
    Tech: 'Latest updates and trends in technology, software development, and more.',
    Travel: 'Exciting travel destinations, tips, and experiences from around the world.',
    Lifestyle: 'Health, wellness, fashion, and everything that enhances your daily life.',
    Food: 'Delicious recipes, food reviews, and culinary adventures.',
  };

  // Filter posts based on search query
  const filteredPosts = popularPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="body-container">
      <header className="header">
        <div className="logo"></div>
      </header>

      <section className="featured-section">
        <h2 className="section-title">Featured Blog Post</h2>
        <div className="featured-content">
          <img src={myBlogsImage} alt="Featured Blog" className="featured-image" />
          <div className="featured-text">
            <h3 className="featured-title">How to Start Your First Blog</h3>
            <p className="featured-description">
              Learn the basics of starting your blog, from choosing a platform to writing your first post!
            </p>
            <Link to="/blog/1" className="featured-link">Read More</Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <h2 className="section-title">Search Blogs</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search blogs by keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Display Search Results */}
        {searchQuery && (
          <div className="search-results">
            <ul>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <li key={post.id} className="search-result-item" onClick={() => setSelectedPost(post)}>
                    {post.title}
                  </li>
                ))
              ) : (
                <li className="no-results">No blogs found</li>
              )}
            </ul>
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <h2 className="section-title">Popular Categories</h2>
        <div className="categories-container">
          {Object.keys(categories).map((category) => (
            <div key={category} className="category-item" onClick={() => setSelectedCategory(category)}>
              {category}
            </div>
          ))}
        </div>
      </section>

      {selectedCategory && (
        <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCategory}</h2>
            <p>{categories[selectedCategory]}</p>
            <button className="close-btn" onClick={() => setSelectedCategory(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Popular Posts Section */}
      <section className="popular-posts-section">
        <h2 className="section-title">Popular Posts</h2>
        <ul className="popular-posts-list">
          {filteredPosts.map((post) => (
            <li key={post.id} className="popular-post-item" onClick={() => setSelectedPost(post)}>
              <h3 className="popular-post-title">{post.title}</h3>
              <p className="popular-post-description">{post.description}</p>
              <span className="popular-post-link">Read More</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal for displaying selected blog */}
      {selectedPost && (
        <div className="modal-overlay" onClick={() => setSelectedPost(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.content}</p>
            <button className="close-btn" onClick={() => setSelectedPost(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
