import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

Header.propTypes = {};

function Header() {
  return (
    <div className="header">
      <div className="header_nav">
        <ul className="header_menu">
            <li><Link to="/box-shadow">Box shadow</Link></li>
            <li><Link to="/text-shadow">Text shadow</Link></li>
            <li><Link to="/border">Border</Link></li>
            <li><Link to="/transform">Transform</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;