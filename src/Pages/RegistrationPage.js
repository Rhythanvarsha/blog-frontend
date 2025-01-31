import React, { useState } from "react";
import './RegisterPage.css';
import myBlogsImage from '../assests/my blogs.png'; // Importing the image from the assets folder

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  async function register(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        setAlertMessage('Registration successful!');
        setAlertType('success');
      } else {
        const data = await response.json();
        setAlertMessage(data.message || 'Registration failed. Please try again.');
        setAlertType('error');
      }
    } catch (err) {
      setAlertMessage('An error occurred. Please check the console.');
      setAlertType('error');
    }
  }

  return (
    <div className="full">
    <div className="register-container">
      {/* Image symbol above the container */}
      <div className="symbol-container">
        <img src={myBlogsImage} alt="My Blogs" className="symbol" />
        <h2 className="symbol-text">MY BLOG</h2>
      </div>

      <form className="register" onSubmit={register}>
        <h1 className="reg">Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={ev => setUsername(ev.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={ev => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={ev => setPassword(ev.target.value)}
        />
        <button className="regbut" type="submit">Register</button>

        {/* Alert messages */}
        {alertMessage && (
          <div className={`alert-${alertType}`}>
            {alertMessage}
          </div>
          
        )}
      </form>
    </div>
    </div>
  );
}
