import React from 'react';
import { Link } from 'react-router-dom';
import { setHomeStatus } from '../features/homeStatusSlice';
import { HomeStatus } from '../enums/homeStatusEnum';
import './navbar.css'; // Assuming you have some CSS for styling
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavbarMenu from './navbarMenu';

const Navbar: React.FC = () =>
{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navList = [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleGoHome = () =>
  {
    dispatch(setHomeStatus(HomeStatus.SplashArt));
    navigate('/');
  }
  return (
    <nav className="navbar">
      <button className="navbar-brand"
        onClick={handleGoHome}>Pixi Trivia
      </button>
      <ul className="navbar-menu">
        {navList.map((navItem, index) => (
          <li key={index}>
            <Link to={navItem.href}>{navItem.label}</Link>
          </li>
        ))}

      </ul>
      <NavbarMenu menuItems={navList} />
    </nav>
  );
};

export default Navbar;