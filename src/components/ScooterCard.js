import React from 'react';
import '../assets/scootercard.scss';
// import { useState } from 'react';

const ScooterCard = () => {
  // const [rating, setRating] = useState();

  const averageRating = '5';

  return (
    <div className="scooter-card">
      <div className="scooter-card-details">
        <h3 className="scooter-card-title">Model of scooter</h3>
        <div className="scooter-card-color">Colour</div>
        <div class="scooter-card-location">LocationCity</div>
        <div className="scooter-card-user-inputs">
          <div class="scooter-card-ratings-container">
            <div className="scooter-card-ratings">
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

export default ScooterCard;
