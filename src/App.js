
import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import ReactSlick from './components/ReactSlick';
import Themes from './components/Themes';
import EventCalender from './components/EventCalender';
import Footer from './components/Footer';
import Registration from './components/Registration';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path='/' element = {<Home />}></Route>
          <Route path='/speakers' element = {<ReactSlick />}></Route>
          <Route path='/themes' element = {<Themes />}></Route>
          <Route path='/events' element = {<EventCalender />}></Route>
          <Route path='/registration' element = {<Registration />}></Route>
          
        </Routes>  
        <Footer />
   
    </>
  );
}

export default App;
