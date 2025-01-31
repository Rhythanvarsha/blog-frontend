import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone) {
      sendMessageToPhone(phone);
    } else {
      alert('Please enter a valid phone number.');
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const subject = 'Subscription Successful';
    const body = `Thank you for subscribing! Your email is: ${email}`;
    const mailtoLink = `mailto:rithigasadhasivam@gamail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    alert('Subscription successful! Check your email for confirmation.');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert('Logging out...');
    navigate('/login');
  };

  // Function to send message to the phone via WhatsApp
  const sendMessageToPhone = (phoneNumber) => {
    const message = "Hello! This is a test message from your website footer.";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
    alert('Message sent via WhatsApp!');
  };

  return (
    <div>
      <style>
        {`
          .footer {
            background: linear-gradient(135deg,rgb(39, 2, 31),rgb(148, 21, 144),rgb(222, 135, 203),);
            color: white;
            padding: 60px 20px;
            text-align: center;
            position: relative;
            font-family: 'Roboto', sans-serif;
            box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);
            animation: fadeInUp 1s ease-in-out;
          }

          .footer h3 {
            font-size: 2rem;
            margin-bottom: 25px;
            font-weight: 700;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
            animation: fadeIn 1s ease-in-out;
          }

          .contact-form, .subscribe-section, .logout-section {
            margin-bottom: 30px;
            padding: 20px;
            margin-left:500px;
            margin-right:500px;
            background-color: rgba(230, 44, 190, 0.1);
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.5s ease-out;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .form-group {
            margin-bottom: 20px;
            text-align: left;
            width: 100%;
            max-width: 500px;
          }

          input, textarea {
            padding: 14px;
            width: 100%;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 1rem;
            box-sizing: border-box;
            background-color:rgb(236, 213, 239);
            color: #ecf0f1;
            transition: background-color 0.3s ease, border-color 0.3s ease;
            animation: slideInLeft 0.5s ease-out;
          }

          input:focus, textarea:focus {
            outline: none;
            border-color:rgb(193, 78, 182);
            background-color:rgb(161, 18, 183);
          }
 .subscribe-button, .logout-button {
            background-color:rgb(43, 4, 37);
            color: white;
            padding: 14px 25px;
            border: none;
            border-radius: 8px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
            width: 90%;
           
            margin-top: 10px;
            justify-content: center;
            align-items: center;
            animation: pulse 2s infinite;
          }

          .submit-button{
          background-color:rgb(43, 4, 37);
            color: white;
            justify-content: center;
            align-items: center;
            }
          .submit-button:hover, .subscribe-button:hover, .logout-button:hover {
            background-color:violet;
            transform: translateY(-3px);
          }

          .footer-social-media {
            margin-top: 30px;
            animation: fadeIn 1s ease-in-out;
          }

          .footer-social-links {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-bottom: 30px;
            transition: all 0.3s ease;
          }

          .social-icon {
            color: #ffffff;
            font-size: 2rem;
            transition: color 0.3s ease, transform 0.3s ease;
            animation: bounce 2s infinite;
          }

          .social-icon:hover {
            color:rgb(212, 208, 239);
            transform: scale(1.2);
          }

          .footer-bar {
            margin-top: 40px;
            font-size: 0.9rem;
            color: #bdc3c7;
            text-align: center;
            padding-top: 20px;
            animation: fadeIn 1.5s ease-in-out;
          }

          .footer-copy b {
            color:rgb(208, 201, 250);
            font-weight: 600;
          }

          .footer-bar p {
            margin: 0;
            letter-spacing: 1px;
          }

          @media (max-width: 768px) {
            .footer {
              padding: 30px 15px;
            }

            .submit-button, .subscribe-button, .logout-button {
              width: 100%;
            }

            .footer-social-links {
              flex-wrap: wrap;
              gap: 15px;
            }

            .form-group {
              width: 100%;
            }
          }

          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes slideIn {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }

          @keyframes slideInLeft {
            0% { transform: translateX(-20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      <footer className="footer">
        {/* Contact Form */}
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" placeholder="Your Location" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        {/* Subscribe Section */}
        <div className="subscribe-section">
          <h3>Subscribe to Our Blog</h3>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <div className="form-group">
              <input
                type="email"
                id="subscribe-email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="subscribe-button">Subscribe</button>
          </form>
        </div>

        {/* Logout Button */}
        <div className="logout-section">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>

        {/* Social Media Links */}
        <div className="footer-social-media">
          <div className="footer-social-links">
            {/* Social media links */}
          </div>
        </div>

        {/* Footer Bar */}
        <div className="footer-bar">
          <p className="footer-copy">
            Copyright &copy; 2025; Designed by <b>Rhythan Varsha J</b>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
