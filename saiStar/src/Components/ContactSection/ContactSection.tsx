import React from 'react';
import { MessageCircle } from 'lucide-react';
import './ContactSection.css';
import { Link } from 'react-router-dom';

const ContactSection: React.FC = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Need Custom Consultancy Services?</h2>
      <p className="contact-description">
        Contact us to discuss your specific requirements and how we can tailor our services to meet your needs.
      </p>

      <Link to="/contact">
                <button className="contact-button">Get in Touch
                <MessageCircle size={20} />
                </button>
              </Link>
      {/* <button className="contact-button">
        <MessageCircle size={20} />
        Get in Touch
      </button> */}
    </div>
  );
};

export default ContactSection;