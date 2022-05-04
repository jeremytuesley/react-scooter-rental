import React from 'react';
import BikeCard from '../components/BikeCard';
import '../assets/bikecatalog.scss';

const BikeCatalog = () => {
  return (
    <div className="bike-catalog-page">
      <div className="bike-filter-container"></div>
      <h1 className="bike-catalog-title">Available Bikes</h1>
      <div className="horizontal-line"></div>
      <div className="bike-catalog-cards">
        <div className="card-container">
          <BikeCard />
        </div>
        <div className="card-container">
          <BikeCard />
        </div>
        <div className="card-container">
          <BikeCard />
        </div>
        <div className="card-container">
          <BikeCard />
        </div>
      </div>
    </div>
  );
};

export default BikeCatalog;
