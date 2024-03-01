
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import ReactSlick from './components/ReactSlick';
import Themes from './components/Themes';
import EventCalender from './components/EventCalender';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element = {<Home />}></Route>
          {/* <Route path='/home' element = {<Home />}></Route> */}
          <Route path='/speakers' element = {<ReactSlick />}></Route>
          <Route path='/themes' element = {<Themes />}></Route>
          <Route path='/events' element = {<EventCalender />}></Route>

        </Routes>  
        <Footer />
   
    </>
  );
}

export default App;
