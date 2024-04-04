import './App.css';
import Home from './Components/Home'
import CoffeeFlavors from './Components/CoffeeFlavors';
import DrinkMenu from './Components/DrinkMenu';
import FoodMenu from './Components/FoodMenu';


function App() {
  return (
    <div className="App">
    <Home/>
    <CoffeeFlavors/>
    <DrinkMenu/>
    <FoodMenu/>
    </div>
  );
}

export default App;
