import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGoogle, faInstagram} from '@fortawesome/free-brands-svg-icons' 


const Footer = () => {
    return(
    <footer class="footer_fix">
      <div className="wrapper-footer">
        <a href="https://facebook.com" className="fa fa-facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="https://www.instagram.com" className="fa fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="https://www.google.com" className="fa fa-google"><FontAwesomeIcon icon={faGoogle} /></a>
        <a href="https://www.twitter.com" className="fa fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
        <span>&copy;</span>
        </div>
      </footer> 
      )
}

export default Footer;