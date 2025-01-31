import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import myBlogsImage from './assests/my blogs.png'; // Ensure correct spelling of "assets"
import Profile from './Profile'; // Assuming Profile component is in the same directory

const Layout = ({ children, onLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Function to handle profile click
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="body-container">
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <img src={myBlogsImage} alt="My Blogs Logo" className="header-logo" />
          <h1 className="header-title">MY BLOGS</h1>
        </div>

        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/myblogs" className="nav-link">My Blogs</Link></li>
            <li className="nav-item"><Link to="/createblogs" className="nav-link">Create Post</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>

            {/* Profile Dropdown */}
            <li className="nav-item">
              <button onClick={toggleProfile} className="nav-link profile-button">Profile</button>
            </li>
            <li className="nav-item">
              <button onClick={onLogout} className="nav-link logout-button">Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Profile Section */}
      {isProfileOpen && (
        <div className="profile-dropdown">
          <Profile />
        </div>
      )}

      {/* Main Content */}
      <main className="main-content">{children}</main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <center style={{ color: 'antiquewhite' }}>
              <a
                href="https://www.facebook.com/people/Diary-Milk/100057486458487/"
                style={{ color: 'rgb(245, 173, 242)', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
                onMouseEnter={(e) => { e.target.style.color = 'rgb(202, 105, 230)'; e.target.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'rgb(245, 173, 242)'; e.target.style.transform = 'scale(1)'; }}
              >
                Facebook
              </a> |
              <a
                href="https://www.instagram.com/rhythanvarsha_janakiram?igsh=cnVtajZ0NnQ4cDdq"
                style={{ color: 'rgb(245, 158, 237)', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
                onMouseEnter={(e) => { e.target.style.color = 'rgb(215, 102, 208)'; e.target.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'rgb(245, 158, 237)'; e.target.style.transform = 'scale(1)'; }}
              >
                Instagram
              </a> |
              <a
                href="https://x.com/DairyMilk"
                style={{ color: 'rgb(249, 170, 236)', textDecoration: 'none', transition: 'color 0.3s, transform 0.3s' }}
                onMouseEnter={(e) => { e.target.style.color = 'rgb(217, 115, 204)'; e.target.style.transform = 'scale(1.1)'; }}
                onMouseLeave={(e) => { e.target.style.color = 'rgb(249, 170, 236)'; e.target.style.transform = 'scale(1)'; }}
              >
                Twitter
              </a>
            </center>
          </div>
          <p className="footer-text">
            &copy; 2025 Designed by <b>Rhythan Varsha</b>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
