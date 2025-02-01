import React from "react";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div id="me" className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://avatars.githubusercontent.com/u/217029" alt="Avatar" />
        </div>

        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/chalofa/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/chalofa/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <Button href="https://calendly.com/chalofa/chat" variant="contained" endIcon={<SendIcon />} target="_blank">
              Call me!
            </Button>
          </div>

          <h1>Gonzalo Fernandez</h1>
          <p>Engineering Manager | Senior Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/chalofa/" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/chalofa/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
