import React from 'react';
import { FiPhone } from 'react-icons/fi';
import './FlavorOfMonth.css'

const FlavorsOfTheMonth = () => {
  return (
    <div className="holiday-flavors">
      <h2 className="primary-heading" style={{ color: 'red' }}>Flavors of the Month</h2>
      <div className="flavors-list-container"> {/* New container for flavors list */}
        <div className="flavor">
          <p className="flavor-number">1.</p>
          <p className="primary-text">Eggnog Latte</p>
        </div>
        <div className="flavor">
          <p className="flavor-number">2.</p>
          <p className="primary-text">Peppermint Mocha</p>
        </div>
        <div className="flavor">
          <p className="flavor-number">3.</p>
          <p className="primary-text">Spiced Apple Cider</p>
        </div>
      </div>
      <button className="secondary-button">
        Call Us <FiPhone />
      </button>
    </div>
  );
};

export default FlavorsOfTheMonth;
