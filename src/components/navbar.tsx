import React from 'react';
import { Link } from 'react-router-dom';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';
import './navbar.css'; // Assuming you have some CSS for styling
import { useDispatch } from 'react-redux';

const Navbar: React.FC = () =>
{
  const dispatch = useDispatch();
  const handleGoHome = () =>
  {
    dispatch(setHomeStatus(HomeStatus.SplashArt));
  }
  return (
    <nav className="navbar">
      <button className="navbar-brand"
        onClick={handleGoHome}>
        <Link to="/">Home</Link>
      </button>
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