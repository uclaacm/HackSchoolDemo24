import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
      <nav style={style.nav}>
        <ul style={style.navList}>
          <li style={style.navItem}>
            <Link to="/" style={style.navLink}>Home</Link>
          </li>
          <li style={style.navItem}>
            <Link to="/cafes" style={style.navLink}>Cafes</Link>
          </li>
          <li style={style.navItem}>
            <Link to="/food" style={style.navLink}>Food</Link>
          </li>
        </ul>
      </nav>
    );
  };  

const style: { [key: string]: React.CSSProperties } = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#152114',
      padding: '10px 0',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 1000,
    },
    navList: {
      display: 'flex',
      justifyContent: 'center',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    navItem: {
      margin: '0 20px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: 'bold',
    },
  };
  

export default NavBar;
