import React from 'react';

const BikeCard = () => {
  return (
    <div className="bikes-page">
      <div className="bike-card">
        <div className="bike-card-details">
          <h3 className="bike-card-title">Model of Bike</h3>
          <div className="bike-card-color">Colour of Bike</div>
          <div class="bike-card-location">Location</div>
          <div className="bike-card-user-inputs">
            <div class="bike-card-ratings-container">
              <div className="bike-card-ratings"></div>
              <div className="ratings-count"></div>
            </div>
            <div className="reserve-button">Reserve now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
