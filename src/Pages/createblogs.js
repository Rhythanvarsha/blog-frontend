import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlogs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: '',
    image: null,
    publishDate: '',
  });

  const [charCount, setCharCount] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'content') {
      setCharCount(value.length);
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.content) newErrors.content = 'Content is required';
    if (!formData.category) newErrors.category = 'Category is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/preview', { state: { formData } });
    }
  };

  return (
    <div className="createblogs-page">
      <style>
        {`
          .createblogs-page {
            font-family: 'Arial', sans-serif;
            background-color: #f5f8fa;
            padding: 50px;
            color:white;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            width: 100%;
          }

          .createblogs-container {
    background-image: url('./d077747a8a3cbf3b56cdc70fdb46fcfa.jpg');
    background-color: #4B0082; /* Dark Violet Background Color */
    background-size: cover;
    background-position: center;
    color: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 60%;
    width: 600px;
}


          .createblogs-title {
            font-size: 2.2rem;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            letter-spacing: 0.5px;
            color: lavender;
          }

          .createblogs-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .createblogs-form-group {
            display: flex;
            flex-direction: column;
          }

          .createblogs-label {
            font-size: 1.1rem;
            color: #555;
            margin-bottom: 8px;
            color: pink;
          }

          .createblogs-input,
          .createblogs-select,
          .createblogs-textarea,
          .createblogs-file,
          .createblogs-date {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            box-sizing: border-box;
            transition: border-color 0.3s ease;
          }

          .createblogs-input:focus,
          .createblogs-select:focus,
          .createblogs-textarea:focus,
          .createblogs-file:focus,
          .createblogs-date:focus {
            border-color:rgb(179, 49, 159);
            outline: none;
            box-shadow: 0 0 8px rgba(0, 119, 255, 0.3);
          }

          .createblogs-textarea {
            min-height: 150px;
            resize: vertical;
          }

          .createblogs-charcount {
            text-align: right;
            font-size: 0.9rem;
            color: #888;
          }

          .createblogs-error {
            color: #ff4d4d;
            font-size: 0.9rem;
            margin-top: 5px;
          }

          .createblogs-submit {
            background-color:rgb(103, 18, 97);
            color: white;
            padding: 15px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            width: 100%;
            margin-top: 20px;
          }

          .createblogs-submit:hover {
            background-color:rgb(213, 33, 223);
            transform: scale(1.05);
          }

          .createblogs-submit:disabled {
            background-color: #dcdcdc;
            cursor: not-allowed;
          }

          .createblogs-file {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
          }

          .createblogs-file:focus {
            outline: none;
            box-shadow: 0 0 8px rgba(0, 119, 255, 0.3);
          }

          .createblogs-container {
            animation: fadeIn 0.5s ease-in-out;
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @media (max-width: 768px) {
            .createblogs-container {
              width: 90%;
            }
          }
        `}
      </style>

      <div className="createblogs-container">
        <h2 className="createblogs-title">Create a New Blog Post</h2>
        <form onSubmit={handleSubmit} className="createblogs-form">
          <div className="createblogs-form-group">
            <label htmlFor="title" className="createblogs-label">Blog Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="createblogs-input"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
            />
            {errors.title && <div className="createblogs-error">{errors.title}</div>}
          </div>

          <div className="createblogs-form-group">
            <label htmlFor="description" className="createblogs-label">Short Description</label>
            <input
              type="text"
              id="description"
              name="description"
              className="createblogs-input"
              value={formData.description}
              onChange={handleChange}
              placeholder="Provide a brief description"
              required
            />
            {errors.description && <div className="createblogs-error">{errors.description}</div>}
          </div>

          <div className="createblogs-form-group">
            <label htmlFor="category" className="createblogs-label">Select Category</label>
            <select
              id="category"
              name="category"
              className="createblogs-select"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Health">Health</option>
              <option value="Business">Business</option>
            </select>
            {errors.category && <div className="createblogs-error">{errors.category}</div>}
          </div>

          <div className="createblogs-form-group">
            <label htmlFor="image" className="createblogs-label">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              className="createblogs-file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="createblogs-form-group">
            <label htmlFor="content" className="createblogs-label">Content</label>
            <textarea
              id="content"
              name="content"
              className="createblogs-textarea"
              value={formData.content}
              onChange={handleChange}
              placeholder="Write your content here..."
              required
            ></textarea>
            <div className="createblogs-charcount">{charCount} / 1000 characters</div>
            {errors.content && <div className="createblogs-error">{errors.content}</div>}
          </div>

          <div className="createblogs-form-group">
            <label htmlFor="publishDate" className="createblogs-label">Publish Date</label>
            <input
              type="date"
              id="publishDate"
              name="publishDate"
              className="createblogs-date"
              value={formData.publishDate}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="createblogs-submit" disabled={charCount > 1000}>
            Preview Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogs;
