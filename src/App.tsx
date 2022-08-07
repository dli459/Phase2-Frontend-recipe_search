import React from 'react';
import logo from './logo.svg';
import FoodApp from './components/FoodApp'
import "./App.css"
import ButtonAppBar from './components/AppBar'
import RecipeReviewCard from './components/RestaurantCard'
import BasicGrid from './components/CardGrid'


function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
       <FoodApp></FoodApp>
       <BasicGrid></BasicGrid>
    </div>
  );
}

export default App;
