import React from 'react';
import logo from './logo.svg';
import FoodApp from './components/FoodApp'
import "./App.css"
import ButtonAppBar from './components/AppBar'



function App() {
  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
       <FoodApp></FoodApp>
       
    </div>
  );
}

export default App;
