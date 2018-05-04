import React from 'react';
import '../App.css';

const Footer = () =>
  <footer>
    <div id="icons">
      <ul className="socials">
        <li><span className="fa-stack fa-lg fa-1x"><a href="mailto:christinetran825@gmail.com"><i className="fa fa-envelope-o" aria-hidden="false"></i></a></span></li>

        <li><span className="fa-stack fa-lg fa-1x"><a href="https://github.com/christinetran825" target="_blank"><i className="fa fa-github" aria-hidden="false"></i></a></span></li>

        <li><span className="fa-stack fa-lg fa-1x"><a href="https://www.linkedin.com/in/christinetran825/" target="_blank"><i className="fa fa-linkedin" aria-hidden="false"></i></a></span></li>

        <li><span className="fa-stack fa-lg fa-1x"><a href="https://twitter.com/thetofukid" target="_blank"><i className="fa fa-twitter" aria-hidden="false"></i></a></span></li>

        <li><span className="fa-stack fa-lg fa-1x"><a href="https://www.instagram.com/thetofukid/" target="_blank"><i className="fa fa-instagram" aria-hidden="false"></i></a></span></li>
      </ul>
    </div>
    <p>© Christine Tran</p>
  </footer>

export default Footer
