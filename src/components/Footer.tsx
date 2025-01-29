import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/chalofa/" target="_blank" rel="noreferrer" title="GitHub account"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/chalofa/" target="_blank" rel="noreferrer" title="LinkedIn account"><LinkedInIcon /></a>
      </div>
    </footer>
  );
}

export default Footer;
