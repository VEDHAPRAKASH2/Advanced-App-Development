import React, { useState } from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import Snack from '../../components/Snack/Snack'

const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  const [snack,setSnack] = useState(false);

  const handleSubmit = (event) => {
    setSnack(true);
    event.preventDefault();
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        
        <h1>Contact Us</h1>
        <p>Have questions or feedback? We'd love to hear from you!.If not, continue to shop at <Link to="/" style={{textDecoration:"none",color:"blue"}}>Bounty Basket</Link></p>
        
        <div className="contact-methods">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <strong>Email:</strong> <a href="mailto:contact@bountybasket.com">contact@bountybasket.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+9876543210">+9876543210</a>
            </li>
            <li>
              <strong>Address:</strong> 
              <address>
                123 Supermarket City, State, Zip Code<br />
                Country
              </address>
            </li>
          </ul>
        </div>
        
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" required placeholder='Name' onChange={(event) => {setName(event.target.value)}}/>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" required placeholder='Email' onChange={(event) => {setEmail(event.target.value)}}/>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" rows="4" required placeholder='Message' onChange={(event) => {setMessage(event.target.value)}}></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        
        <Snack severity="success" message="Message submitted" open={snack} handleClose={() => {setSnack(false)}}/>
      </div>
    </div>
  );
};

export default Contact;