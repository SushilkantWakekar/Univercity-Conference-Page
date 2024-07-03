import React from 'react'
import university from './university.jpg';
import ReactSlick from '../ReactSlick'
import './index.css';
import Themes from '../Themes';
import EventCalender from '../EventCalender';
import FeeDetails from '../FeeDetails';

const Home = () => {
  return (
    <>
    <div className='home'>
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