import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import EmailJS
import './Blog2.css';
import blogImage from '../assests/icons.webp';

const Blog2 = () => {
  const [comment, setComment] = useState(''); // State for the comment input
  const [submitted, setSubmitted] = useState(false); // State for submission status

  // Function to handle comment form submission
  const handleCommentSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // EmailJS parameters
    const templateParams = {
      comment: comment,
      user_email: 'user@example.com', // Replace with the recipient's email
    };

    // Send email using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setSubmitted(true); // Mark as submitted
          setComment(''); // Clear the comment field
        },
        (error) => {
          console.error('Error sending email:', error);
        }
      );
  };

  return (
    <div className="blog-page">
      {/* Blog Header */}
      <header className="blog-header">
        <h1 className="blog-title">The Ultimate Guide to Blogging</h1>
        <p className="blog-meta">By Rhythan Varsha | January 28, 2025</p>
      </header>

      {/* Blog Content */}
      <div className="blog-content">
         <img src={blogImage} alt="How to Build a Simple Website" className="blog-image" />
        <h2>What is Blogging?</h2>
        <p>Blogging is the practice of writing and publishing content online. It started as a personal journal but has evolved into a powerful tool for businesses, educators, and influencers.</p>

        <h2>Why Start a Blog?</h2>
        <ul>
          <li><strong>Express Yourself:</strong> Share your thoughts, experiences, and expertise.</li>
          <li><strong>Build an Audience:</strong> Connect with people who share your interests.</li>
          <li><strong>Earn Money:</strong> Many bloggers monetize their content through ads, sponsorships, and affiliate marketing.</li>
        </ul>

        <h2>How to Start a Blog in 5 Steps</h2>
        <ol>
          <li><strong>Choose a Niche:</strong> Pick a topic you're passionate about.</li>
          <li><strong>Select a Blogging Platform:</strong> WordPress, Blogger, or Medium.</li>
          <li><strong>Buy a Domain & Hosting:</strong> Choose a catchy name and reliable hosting.</li>
          <li><strong>Design Your Blog:</strong> Use themes and layouts that suit your style.</li>
          <li><strong>Create & Publish Content:</strong> Write engaging posts and share them.</li>
        </ol>

        <h2>Tips for Writing Engaging Blog Posts</h2>
        <ul>
          <li>Use <strong>compelling headlines</strong> to grab attention.</li>
          <li>Keep paragraphs short and use <strong>bullet points</strong> for readability.</li>
          <li>Add <strong>images and videos</strong> to enhance visual appeal.</li>
          <li>Encourage interaction by asking readers to <strong>leave comments</strong>.</li>
        </ul>

        <h2>SEO and Blog Promotion</h2>
        <ul>
          <li>Using <strong>relevant keywords</strong> to rank higher on Google.</li>
          <li>Promoting on <strong>social media platforms</strong>.</li>
          <li>Building <strong>backlinks</strong> from reputable sites.</li>
        </ul>
      </div>

      {/* Comments Section */}
      

      {/* Related Posts */}
      

      {/* Back to Blogs */}
      <Link to="/myblogs" className="back-to-blogs">Back to All Blogs</Link>
    </div>
  );
};

export default Blog2;
