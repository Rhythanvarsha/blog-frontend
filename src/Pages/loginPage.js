import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './loginPage.css';
import MyBlogsImage from '../assests/my blogs.png';
import './login.png';
const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // This hook allows us to programmatically navigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/login", { email, password });

      if (response.status === 200) {
        // Store the auth token in localStorage for persistence
        localStorage.setItem("authToken", response.data.token);

        // Trigger the onLogin function passed from App.js to update login state
        onLogin();

        // Redirect to home page
        navigate("/home");
      } else {
        setError(response.data.message || "Invalid credentials.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-page-container">
      <div className="login">
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="login-container">
            {/* Image and Text */}
            <div className="image-container">
              <img src={MyBlogsImage} alt="My Blogs" className="login-image" />
              <p className="login-title">MY BLOG</p>
            </div>

            <h1 className="login-heading">Login</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin} className="form">
              <div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field"
                />
              </div>
              <button type="submit" className="submit-button">Login</button>
            </form>
            <div className="create-account" onClick={navigateToRegister}>
              Create New Account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
