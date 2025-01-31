import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
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
            If you have an exciting opportunity/project where we can collaborate, lets have
            a <a href="https://calendly.com/chalofa/chat" target="_blank" rel="noreferrer">quick chat</a>.
          </p>

          <Button href="https://calendly.com/chalofa/chat" variant="contained" endIcon={<SendIcon />} target="_blank">
            Schedule call
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
