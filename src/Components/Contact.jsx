import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-heading animated">Get in Touch</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">
            <span className="icon">👤</span> Name
          </label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <span className="icon">✉️</span> Email
          </label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <span className="icon">💬</span> Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
