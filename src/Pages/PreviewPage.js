import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PreviewPage.css'; // Import the CSS file

const PreviewPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.formData) {
    return <p>No blog to preview</p>;
  }

  const handlePublish = () => {
    // Save the published blog data (this can be replaced with an API call to save it to a database)
    const publishedBlogs = JSON.parse(localStorage.getItem('publishedBlogs')) || [];
    publishedBlogs.push(state.formData);
    localStorage.setItem('publishedBlogs', JSON.stringify(publishedBlogs));

    console.log('Blog published:', state.formData);
    
    // Navigate to the /myblogs page after publishing
    navigate('/myblogs');
  };

  return (
    <div className="preview-page-container">
      <h3>Preview Blog</h3>

      <div className="blog-content">
        <div className="blog-title">
          <h2>{state.formData.title}</h2>
        </div>

        <div className="blog-description">
          <h4>Description:</h4>
          <div className="answer-box">{state.formData.description}</div>
        </div>

        <div className="blog-category">
          <h4>Category:</h4>
          <div className="answer-box">{state.formData.category}</div>
        </div>

        <div className="blog-content-body">
          <h4>Content:</h4>
          <div className="answer-box">{state.formData.content}</div>
        </div>

        {state.formData.image && (
          <div className="blog-image">
            <h4>Image:</h4>
            <div className="answer-box image-box">
              <img src={URL.createObjectURL(state.formData.image)} alt="Blog" />
            </div>
          </div>
        )}

        {state.formData.publishDate && (
          <div className="blog-publish-date">
            <h4>Publish Date:</h4>
            <div className="answer-box">{state.formData.publishDate}</div>
          </div>
        )}
      </div>

      <div className="button-container">
        <button className="publish-button" onClick={handlePublish}>
          Publish
        </button>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Create
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
