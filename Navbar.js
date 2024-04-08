import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <div className="site-header__start">
          <Link to="#" className="brand">Automate-A-Site</Link>
        </div>
        <div className="site-header__middle">
          <nav className="nav">
            <button className="nav__toggle" aria-expanded={isActive ? 'true' : 'false'} onClick={toggleNav} type="button">
              {isActive ? 'Close Menu' : 'Menu'}
            </button>
            <ul className={`nav__wrapper ${isActive ? 'active' : ''}`}>
              <li className="nav__item"><Link to="/">Home</Link></li>
              <li className="nav__item"><Link to="#">Services</Link></li>
              <li className="nav__item"><Link to="#">About</Link></li>
              <li className="nav__item"><Link to="/contactus">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <div className="site-header__end">
        <Link to={"/login"}><button className="button-6" >Log In</button></Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
