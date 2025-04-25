import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Header.css';
import logo from '../../assets/Picture1.png';

interface HeaderProps {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu, closeMenu }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="SAI STAR Consultancy" />
        </Link>
        
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
            </li>
            {/* <li className="nav-item">
              <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className={`nav-link ${isActive('/team')}`} onClick={closeMenu}>Our Team</Link>
            </li>
            <li className="nav-item">
              <Link to="/why-we" className={`nav-link ${isActive('/why-we')}`} onClick={closeMenu}>Why Choose Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;