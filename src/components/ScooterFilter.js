import React from 'react';

const ScooterFilter = () => {
  return (
    <div>
      <h3>When are you looking to rent?</h3>
      <div className="user-selections-container">
        <div className="user-selections">
          <div className="user-selections-title">City</div>
          <div className="user-selections-sub-title">Where do you need it?</div>
        </div>
        <div className="user-selections">
          <div className="user-selections-title">Check in</div>
          <div className="user-selections-sub-title">Add dates</div>
        </div>
        <div className="user-selections">
          <div className="user-selections-title">Check out</div>
          <div className="user-selections-sub-title">Add dates</div>
        </div>
        <div className="user-selections">
          <div className="user-selections-title">Advanced</div>
          <div className="user-selections-icon">
            {/* Hamburger, will have model, color, rating selections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScooterFilter;
