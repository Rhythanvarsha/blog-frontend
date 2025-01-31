import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './startingPage.css';  // Import the CSS for animations

const StartingPage = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to handle navigation on button click
  const handleGetStarted = () => {
    navigate('/login');  // Navigate to the login page when the button is clicked
  };

  return (
    <div className="starting-page">
      {/* Welcome Section */}
      <div className="welcome-section fade-in">
        <h1 className="welcome-heading">Welcome to Your Blogging Journey</h1>
        <p className="welcome-subtext">
          Let your creativity flow as you start writing your own story. The world is waiting for your words!
        </p>
      </div>

      <div className="content-wrapper">
        <h1 className="main-heading fade-in">Ready to Share Your Ideas?</h1>
        <p className="intro-text fade-in">
          Ready to unleash your creativity? Share your ideas with the world through your blog. Whether you're passionate about tech, travel, food, or lifestyle, your voice deserves to be heard. Join us today and start creating a lasting impact!
        </p>
        <p className="sub-heading fade-in">
          It's time to turn your thoughts into words and words into influence. Start your journey today, and let your blog make a difference!
        </p>
        {/* Get Started button */}
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StartingPage;
