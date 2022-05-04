import React from 'react';
import '../assets/bikecard.scss';
// import { useState } from 'react';

const BikeCard = () => {
  // const [rating, setRating] = useState();

  const averageRating = '5';

  return (
    <div className="bike-card">
      <div className="bike-card-details">
        <h3 className="bike-card-title">Model of Bike</h3>
        <div className="bike-card-color">Colour</div>
        <div class="bike-card-location">LocationCity</div>
        <div className="bike-card-user-inputs">
          <div class="bike-card-ratings-container">
            <div className="bike-card-ratings">
              {/* add class "checked" on hover, and on click save rating amount(1 to 5) and update averageRating */}
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
              <div className="ratings-count">
                Average Rating: {averageRating}
              </div>
            </div>
          </div>
          <div className="reserve-button">Reserve</div>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
