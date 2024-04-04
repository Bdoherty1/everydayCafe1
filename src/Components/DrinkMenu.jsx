import React from 'react';
import './DrinkMenu.css'; // Import CSS file for styling

function DrinkMenu() {
  return (
    <div className="drink-menu-container">
      <h2 className="title">Drink Menu</h2>
      <div className="sections-container">
        <div className="section-column">
          <h3>Coffee</h3>
          <ul>
            <li>Hot</li>
            <li>Iced</li>
            <li>Hot Cappuccino</li>
            <li>Iced Latte</li>
            <li>Hot Mocha Blast</li>
          </ul>
        </div>
        <div className="section-column">
          <h3>Tea</h3>
          <ul>
            <li>Iced Mocha Blast</li>
            <li>Hot Mochaccino</li>
            <li>Iced Mochaccino</li>
            <li>Pound of Coffee</li>
            <li>1/2 Pound of Coffee</li>
          </ul>
        </div>
      </div>
      <div className="sections-container">
        <div className="section-column">
          <h3>Frozen Drinks</h3>
          <ul>
            <li>Mocha Monkey</li>
            <li>Frozen Lemonade</li>
            <li>Protein Shake (All Natural)</li>
            <li>Coffee Toffee Freeze</li>
            <li>Extra Thick Milkshake</li>
          </ul>
        </div>
        <div className="section-column">
          <h3>Other</h3>
          <ul>
            <li>Lime Rickey - Traditional</li>
            <li>Lime Rickey - Revved-up</li>
            <li>Lime Rickey - Double Revved-up</li>
            <li>+ Add an Espresso Shot</li>
            <li>+ Add a Flavor Shot/Syrup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DrinkMenu;
