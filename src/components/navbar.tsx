import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Assuming you have some CSS for styling

const Navbar: React.FC = () =>
{
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Home</Link>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/scores">High Scores</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;