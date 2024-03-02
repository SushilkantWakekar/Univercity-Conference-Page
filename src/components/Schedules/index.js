import React from 'react';
import './index.css'

const Schedules = props => {
    const {data} = props ;
    const {time,eventType} = data ;
    return(
        
        <li className= 'schedule-card'>
        
            <div className="time-card">
                <h4>{time}</h4>
            </div>
            <div className="card">
                <h4>{eventType}</h4>
            </div>    
            
        </li>
    )
}


export default Schedules