import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Top section with Login and Register buttons */}
      <div className="top-nav">
        <Link to="/login">
          <button className="top-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="top-button">Register</button>
        </Link>
      </div>

      {/* Main Header Navigation */}
      <header>
        <h1><b>MY BLOGS</b></h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/myblogs">My Blogs</Link></li>
            <li>
              {/* Open 'Create Post' in a new tab */}
              <Link to="/createblogs" target="_blank">
                Create Post
              </Link>
            </li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://www.facebook.com/CadburyUK/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://youtube.com/@cadburyph?si=AZSkbFk5wkWBt0Jx" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.instagram.com/cadburyuk/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <p>&copy; 2025 Designed by <b>Rhythan Varsha</b></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
