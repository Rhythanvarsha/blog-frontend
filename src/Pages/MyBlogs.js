import React, { useState, useEffect } from "react";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  // Predefined categories
  const categories = ["Tech", "Lifestyle", "Health", "Education", "Business"];

  // Fetch blogs from localStorage on component mount
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("publishedBlogs")) || [];
    setBlogs(savedBlogs);
  }, []);

  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    category: "",
    likes: 0,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [editBlogIndex, setEditBlogIndex] = useState(null);
  const [editedContent, setEditedContent] = useState({
    title: "",
    description: "",
    category: "",
  });

  // Handle Add Blog
  const handleAddBlog = () => {
    if (newBlog.title && newBlog.description && newBlog.category) {
      const updatedBlogs = [...blogs, newBlog];
      setBlogs(updatedBlogs);
      localStorage.setItem("publishedBlogs", JSON.stringify(updatedBlogs)); // Save to localStorage
      setNewBlog({ title: "", description: "", category: "", likes: 0 });
    } else {
      alert("Please fill in all fields!");
    }
  };

  // Handle Delete Blog
  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem("publishedBlogs", JSON.stringify(updatedBlogs)); // Save to localStorage
  };

  // Handle Edit Blog
  const handleEdit = (index) => {
    setEditBlogIndex(index);
    setEditedContent(blogs[index]);
  };

  // Handle Save Edited Blog
  const handleSaveEdit = () => {
    const updatedBlogs = [...blogs];
    updatedBlogs[editBlogIndex] = editedContent;
    setBlogs(updatedBlogs);
    localStorage.setItem("publishedBlogs", JSON.stringify(updatedBlogs)); // Save to localStorage
    setEditBlogIndex(null);
  };

  // Handle Like Blog
  const handleLike = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].likes += 1;
    setBlogs(updatedBlogs);
    localStorage.setItem("publishedBlogs", JSON.stringify(updatedBlogs)); // Save to localStorage
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="myblogs-container">
      <style jsx>{`
        .myblogs-container {
        background-image: url('./d077747a8a3cbf3b56cdc70fdb46fcfa.jpg');
          font-family: Arial, sans-serif;
          padding: 100px;
         
          margin: 0 auto;
        }

        h2 {
          color: #333;
          text-align: center;
          margin-bottom: 20px;
        }

        .add-blog-container,
        .edit-form {
          background-color:rgb(236, 106, 208);
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
          box-sizing: border-box;
        }

        .add-blog-button,
        .save-edit-button,
        .btn-like,
        .btn-edit,
        .btn-delete {
          padding: 10px 20px;
          background-color:rgb(103, 19, 103);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .add-blog-button:hover,
        .save-edit-button:hover {
          background-color:rgb(220, 163, 217);
        }

        .search-input {
          width: 100%;
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .blog-card {
          border: 1px solid #ddd;
          padding: 15px;
          margin-bottom: 15px;
          border-radius: 5px;
          background-color:rgb(249, 211, 248);
        }

        .blog-details h3 {
          margin: 0 0 10px 0;
        }

        .blog-details p {
          margin: 5px 0;
        }

        .btn-like,
        .btn-edit,
        .btn-delete {
          padding: 5px 10px;
          margin: 5px;
        }

        .btn-like {
          background-color: #2196f3;
        }

        .btn-edit {
          background-color: #ff9800;
        }

        .btn-delete {
          background-color: #f44336;
        }

        .btn-like:hover {
          background-color: #1976d2;
        }

        .btn-edit:hover {
          background-color: #fb8c00;
        }

        .btn-delete:hover {
          background-color: #e53935;
        }

        .no-blogs-message {
          color: #666;
          text-align: center;
        }

        .blog-actions {
          display: flex;
          justify-content: flex-start;
          gap: 10px;
        }
      `}</style>

      <h2>My Blogs</h2>

      {/* Add New Blog */}
      <div className="add-blog-container">
        <input
          className="input-field"
          type="text"
          placeholder="Blog Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
        />
        <textarea
          className="input-field"
          placeholder="Blog Description"
          value={newBlog.description}
          onChange={(e) =>
            setNewBlog({ ...newBlog, description: e.target.value })
          }
        />

        {/* Category Dropdown */}
        <select
          className="input-field"
          value={newBlog.category}
          onChange={(e) => setNewBlog({ ...newBlog, category: e.target.value })}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button className="add-blog-button" onClick={handleAddBlog}>
          Add Blog
        </button>
      </div>

      {/* Search Blogs */}
      <input
        className="search-input"
        type="text"
        placeholder="Search by category"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display Blogs */}
      {filteredBlogs.length === 0 ? (
        <p className="no-blogs-message">No blogs found</p>
      ) : (
        filteredBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
            {editBlogIndex === index ? (
              <div className="edit-form">
                <input
                  className="input-field"
                  type="text"
                  value={editedContent.title}
                  onChange={(e) =>
                    setEditedContent({ ...editedContent, title: e.target.value })
                  }
                />
                <textarea
                  className="input-field"
                  value={editedContent.description}
                  onChange={(e) =>
                    setEditedContent({ ...editedContent, description: e.target.value })
                  }
                />

                {/* Edit Category Dropdown */}
                <select
                  className="input-field"
                  value={editedContent.category}
                  onChange={(e) =>
                    setEditedContent({ ...editedContent, category: e.target.value })
                  }
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <button className="save-edit-button" onClick={handleSaveEdit}>
                  Save Edit
                </button>
              </div>
            ) : (
              <div className="blog-details">
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <p>Category: {blog.category}</p>
                <p>Likes: {blog.likes}</p>
                <div className="blog-actions">
                  <button className="btn-like" onClick={() => handleLike(index)}>
                    Like
                  </button>
                  <button className="btn-edit" onClick={() => handleEdit(index)}>
                    Edit
                  </button>
                  <button className="btn-delete" onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyBlogs;
