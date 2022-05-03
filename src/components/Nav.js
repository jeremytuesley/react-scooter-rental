import React from 'react';

import '../assets/nav.scss';

const Nav = () => {
  return (
    <nav>
      <div className="business-name">Toptal Bike Rentals</div>
      <div className="nav-list-container">
        <ul className="nav-list">
          <li className="nav-list-item nav-list-catalog">Rent a bike</li>
          <li className="nav-list-item">Register</li>|
          <li className="nav-list-item">Sign in</li>
          {/* <li className="nav-list-item">Log out</li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
