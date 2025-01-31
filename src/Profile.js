import React, { useState } from 'react';
import girlImage from './girl.png';

const Profile = () => {
  // Profile Data
  const initialProfile = {
    name: 'Rhythan Varsha',
    email: 'rhythan@example.com',
    bio: 'A passionate blogger and software developer. Exploring the world of web development and sharing experiences through blogs.',
    image: girlImage,
  };

  // State to manage profile data
  const [profile, setProfile] = useState(initialProfile);

  // Inline Styles
  const styles = {
    profileContainer: {
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'violet',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      zIndex: '100',
    },
    profileHeader: {
      textAlign: 'center',
    },
    profileImage: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '10px',
    },
    profileName: {
      fontSize: '1.5rem',
      color: '#2c3e50',
    },
    profileEmail: {
      fontSize: '1.1rem',
      color: '#7f8c8d',
    },
    profileBio: {
      marginTop: '20px',
    },
    bioTitle: {
      fontSize: '1.2rem',
      color: '#16a085',
    },
    bioContent: {
      fontSize: '1rem',
      color: '#333',
    },
    buttonContainer: {
      marginTop: '20px',
      textAlign: 'center',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      margin: '5px',
      fontSize: '1rem',
      transition: '0.3s',
    },
    buttonDelete: {
      backgroundColor: '#e74c3c', // Red color for delete
    },
    buttonEdit: {
      backgroundColor: '#2ecc71', // Green color for edit
    },
    buttonHover: {
      opacity: '0.8',
    },
    inputFile: {
      display: 'none',
    },
  };

  // Edit Profile function
  const handleEdit = () => {
    const newName = prompt('Enter your new name', profile.name);
    const newEmail = prompt('Enter your new email', profile.email);
    const newBio = prompt('Enter your new bio', profile.bio);
    
    if (newName && newEmail && newBio) {
      setProfile({
        ...profile,
        name: newName,
        email: newEmail,
        bio: newBio,
      });
    }
  };

  // Delete Profile function
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your profile?');
    if (confirmDelete) {
      setProfile(null); // Set profile to null (could be a way to reset the state or clear it)
      alert('Profile deleted!');
    }
  };

  // Handle Photo Change
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevState) => ({
          ...prevState,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file); // Convert the file to base64
    }
  };

  if (!profile) {
    return <div>Your profile has been deleted.</div>; // If profile is deleted, show this message
  }

  return (
    <div style={styles.profileContainer}>
      <div style={styles.profileHeader}>
        <img src={profile.image} alt="Profile" style={styles.profileImage} />
        <h2 style={styles.profileName}>{profile.name}</h2>
        <p style={styles.profileEmail}>{profile.email}</p>
      </div>
      <div style={styles.profileBio}>
        <h3 style={styles.bioTitle}>Bio:</h3>
        <p style={styles.bioContent}>{profile.bio}</p>
      </div>
      
      {/* Buttons for Edit and Delete Profile */}
      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, ...styles.buttonEdit }}
          onClick={handleEdit}
        >
          Edit Profile
        </button>
        <button
          style={{ ...styles.button, ...styles.buttonDelete }}
          onClick={handleDelete}
        >
          Delete Profile
        </button>
      </div>

      {/* Input for changing profile photo */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <label htmlFor="photo-upload" style={styles.button}>
          Change Photo
        </label>
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handlePhotoChange}
          style={styles.inputFile}
        />
      </div>
    </div>
  );
};

export default Profile;
