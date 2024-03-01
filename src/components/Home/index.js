import React from 'react'
import university from './university.jpg';
import Typewriter from "typewriter-effect";
import ReactSlick from '../ReactSlick'
import './index.css';
import Themes from '../Themes';
import EventCalender from '../EventCalender';
import FeeDetails from '../FeeDetails';

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='typewriter-container multicolor-text'>
            <Typewriter 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("X-University")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You to conference")
                        .start();
                }}
            />
        </div>
        <div className='university-logo'>
            <img src= {university} alt='university'  className='university-img'/>
        </div>   
    </div>

<ReactSlick />
<Themes />
<EventCalender />
<FeeDetails />
</>
  )
}

export default Home