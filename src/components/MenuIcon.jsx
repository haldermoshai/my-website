// MenuIcon.js
import { useState } from 'react';

const MenuIcon = ( toggleNavbar ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (toggleNavbar) {
      toggleNavbar();
    }
  };

  return (
    <div
      className={`wrapper-menu ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
    >
      <div className="line-menu half start"></div>
      <div className="line-menu"></div>
      <div className="line-menu half end"></div>
    </div>
  );
};

export default MenuIcon;