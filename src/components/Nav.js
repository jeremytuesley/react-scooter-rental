import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/nav.scss';

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <div className="business-name">Sunefire Scooter Rentals</div>
      </Link>
      <div className="nav-list-container">
        <ul className="nav-list">
          <Link to="/catalog">
            <li className="nav-list-item nav-list-catalog">
              Rentable scooters
            </li>
          </Link>
          <li className="nav-list-item">Register</li>|
          <li className="nav-list-item">Sign in</li>
          {/* <li className="nav-list-item">Log out</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
