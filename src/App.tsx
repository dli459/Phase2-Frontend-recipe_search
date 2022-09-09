import React from 'react';
import "./App.css"
import Main from './components/Main';
import Login from './components/Login';
import { Routes, Route, Navigate} from "react-router-dom";
import ButtonAppBar from './components/AppBar';
import { useAppDispatch, useAppSelector } from "./store/hooks";


function App() {

  const user = useAppSelector(state => state.user);
  console.log(user);

  return (
    <div className="App">
      <ButtonAppBar></ButtonAppBar>

      <Routes>

        <Route path="/" element={user.id ? <Main></Main>: <Navigate to="/login" /> } />
        <Route path="/login" element= {user.id ? <Navigate to="/" /> : <Login></Login>} />
        
      </Routes>


    </div>
  );
}

export default App;
