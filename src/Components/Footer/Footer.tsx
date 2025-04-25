import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/Picture1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-column company-info">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="SAI STAR Consultancy" />
          </Link>
          <p>
            Providing expert business consultancy services since 2010. We help businesses 
            transform, grow, and achieve their full potential.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-column quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/why-we">Why Choose Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-column services-links">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/services">Business Strategy</Link></li>
            <li><Link to="/services">Financial Advisory</Link></li>
            <li><Link to="/services">Market Research</Link></li>
            <li><Link to="/services">Operational Excellence</Link></li>
            <li><Link to="/services">Digital Transformation</Link></li>
          </ul>
        </div>
        
        <div className="footer-column contact-info">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <Mail size={16} />
              <span>info@saistar.com</span>
            </li>
            <li>
              <MapPin size={16} />
              <span>123 Business Avenue, Suite 200<br />New York, NY 10001</span>
            </li>
            <li>
              <Clock size={16} />
              <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} SAI STAR Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;