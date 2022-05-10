import React from 'react';
import ScooterCard from '../components/ScooterCard';
import '../assets/scootercatalog.scss';

const ScooterCatalog = () => {
  return (
    <div className="scooter-catalog-page">
      <div className="scooter-filter-container"></div>
      <h1 className="scooter-catalog-title">Available scooters</h1>
      <div className="horizontal-line"></div>
      <div className="scooter-catalog-cards">
        <div className="card-container">
          <ScooterCard />
        </div>
        <div className="card-container">
          <ScooterCard />
        </div>
        <div className="card-container">
          <ScooterCard />
        </div>
        <div className="card-container">
          <ScooterCard />
        </div>
      </div>
    </div>
  );
};

export default ScooterCatalog;
