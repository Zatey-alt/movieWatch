import React, { useState } from 'react';


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={`nav-container ${isNavOpen ? 'open' : ''}`}>
      <i className="fa-solid fa-film film-icon"></i>
      <i className="fa-brands fa-github github-icon"></i>
    </div>
  );
};

export default Navbar;
