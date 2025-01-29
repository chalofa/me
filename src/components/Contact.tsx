import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>
            <a href="https://calendly.com/chalofa/chat" title="Calendly link" target="_blank" rel="noreferrer">Let's meet!</a>
          </h1>
          <p>
            If you have an exciting opportunity/project where we can collaborate, lets have a
            quick <a href="https://calendly.com/chalofa/chat" target="_blank" rel="noreferrer">intro call</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
