import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Button} from '@mui/material';
import { Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Betting from './bettingPage';
import Home from './homePage';
import {BrowserRouter, Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
      <Navbar/>
          <div className="App">
            <h1>
              Welcome to the Sportsbook, <br/>
              "Wealth for Generations to Come"
            </h1>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/bettingPage/:person" element={<Betting/>}/>
              <Route path="/bettingPage/:person" element={<Betting/>}/>
            </Routes>
          </div>
    </>
  );
}

export default App;
