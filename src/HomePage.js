import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Description from './Description';
import ProductSection from './ProductSection';
import popMachine from './images/Vendo_511_2.jpeg';
import snackMachine from './images/AMS_35.jpeg';
import coffeeMachine from './images/Crane_637.jpeg';
import './HomePage.css';

const drinkBrands = ["Coca-Cola", "Pepsi", "Powerade", "Red Bull"];
const snackBrands = ["Doritos", "Lay's", "Snickers", "M&M's"];
const coffeeBrands = ["Dunkin", "Starbucks", "Tim Hortons"];

const drinkDescription = (
  <p>Quench your thirst with our selection of refreshing beverages, including popular brands and flavors.
  <br/><br/>We provide soft drinks, energy drinks, electrolyte beverages, and healthy drink options as well.
  All beverages are chilled to the perfect temperature so that you always end up feeling refreshed!</p>
); 

const snackDescription = (
  <p>Satisfy your cravings with a variety of delicious snacks from well-known brands.
  <br/><br/>We provide healthy options as well including protein bars, granola bars, nutritional bars, 
  as well as healthier options for chips, cookies, crackers and the like. 
  Recharge everybody's energy with our snack selection and have a more productive workday!</p>
);

const coffeeDescription = (
  <p>Experience the perfect cup of coffee with our high-quality coffee products and brands.
  <br/><br/>Feeling sluggish, or tired at work? 
  Tired of the same coffee flavors or having to buy coffee all the time? 
  Well then let us take care of your coffee needs, and get that pep back into your step!
  </p>
);

const HomePage = () => (
  <div>
    <Navbar tab="home"/>
    <Banner />
    <Description />
    <ProductSection
      title="Drinks"
      image={popMachine}
      description={drinkDescription}
    />
    <ProductSection
      title="Snacks"
      image={snackMachine}
      description={snackDescription}
    />
    <ProductSection
      title="Coffee"
      image={coffeeMachine}
      description={coffeeDescription}
    />
  </div>
);

export default HomePage;