import React from 'react';
import './CoffeeFlavor.css'
function CoffeeFlavorsMenu() {
  return (
    <div className="coffee-flavors-menu-container">
      <div className="coffee-flavors-menu">
        <h2>Coffee Flavors</h2>
        <p className="subheading">
          Real flavors, No syrups. Every pot of coffee that is brewed at The Everyday Cafe is made from freshly ground beans.
        </p>
        <div className="flavor-columns">
          <div className="flavor-column">
            <h3>Column 1</h3>
            <ul>
              <li>Banana Nut</li>
              <li>Blueberry</li>
              <li>Brownie Toffee Crunch</li>
              <li>Cinnamon Hazelnut</li>
              <li>Coconut Cream</li>
              <li>Chocolate Raspberry</li>
              <li>Decaf Hazelnut</li>
              <li>French Roast Mocha Mint</li>
              <li>French Vanilla</li>
            </ul>
          </div>
          <div className="flavor-column">
            <h3>Column 2</h3>
            <ul>
              <li>Honey Almond Crunch</li>
              <li>Irish Creme</li>
              <li>Maple Cinnamon French Toast</li>
              <li>Rainforest Crunch</li>
              <li>S'mores!</li>
              <li>Snickerdoodle</li>
              <li>Strawberry Shortcake</li>
              <li>Swiss Chocolate Almond</li>
              <li>Toasted Almond</li>
              <li>Vanilla Cupcake (a fan favorite!)</li>
              <li>White Chocolate Chip</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoffeeFlavorsMenu;
