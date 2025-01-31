import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import RegisterPage from "./Pages/RegistrationPage";
import LoginPage from "./Pages/loginPage";
import CreateBlogs from "./Pages/createblogs";
import PreviewPage from "./Pages/PreviewPage";
import MyBlogs from "./Pages/MyBlogs.js";
import BlogPage from "./Pages/blogPage";
import { UserContextProvider } from "./UserContext";
import Blog1 from "./Pages/blog1.js";
import Blog2 from "./Pages/blog2.js";
import StartingPage from './Pages/StartingPage';
import Contact from './Pages/contact.js';
import Layout from './Layout'; // Import Layout component
import Header from './Header.js';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);

    // Check login status from localStorage
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handlePublish = (newBlog) => {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear auth token
    setIsLoggedIn(false); // Update login state
    navigate("/"); // Redirect to the homepage or starting page
  };

  return (
    <UserContextProvider>
      <div className="app-body">
        <div className="app-container">
          <Routes>
            {/* Starting page route */}
            <Route path="/" element={<StartingPage />} />

            <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route 
              path="/home" 
              element={isLoggedIn ? (
                <Layout onLogout={handleLogout}>
                  <Header />
                </Layout>
              ) : (
                <LoginPage onLogin={() => setIsLoggedIn(true)} />
              )}
            />

            <Route 
              path="/createblogs" 
              element={isLoggedIn ? (
                <Layout onLogout={handleLogout}>
                  <CreateBlogs />
                </Layout>
              ) : (
                <LoginPage onLogin={() => setIsLoggedIn(true)} />
              )}
            />

            <Route 
              path="/myblogs" 
              element={isLoggedIn ? (
                <Layout onLogout={handleLogout}>
                  <MyBlogs blogs={blogs} onDelete={handleDelete} />
                </Layout>
              ) : (
                <LoginPage onLogin={() => setIsLoggedIn(true)} />
              )}
            />

            <Route 
              path="/preview" 
              element={isLoggedIn ? (
                <Layout onLogout={handleLogout}>
                  <PreviewPage onPublish={handlePublish} />
                </Layout>
              ) : (
                <LoginPage onLogin={() => setIsLoggedIn(true)} />
              )}
            />

            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/blog/:id" element={<BlogPage blogs={blogs} />} />
          </Routes>
        </div>
      </div>
    </UserContextProvider>
  );
};

export default App;
