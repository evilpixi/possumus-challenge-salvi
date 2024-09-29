import React, { useState } from 'react';
import './navbar.css';

interface NavbarMenuProps
{
  menuItems: { label: string; href: string }[];
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ menuItems }) =>
{
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>
  {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-ham-menu">
      <button
        className={`hamburger-button`}
        onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <ul className="menu-from-hamburger-button">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavbarMenu;