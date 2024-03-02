import FeeDetails from '../FeeDetails';
import Schedules from '../Schedules';
import './index.css'
import { SlCalender } from "react-icons/sl";
import React from 'react';

const registration = [
    {
        id: 1,
        time : '9:30 a.m',
        eventType : 'Registration & Breakfast'
    },
    
];

const inaugural = [
    {
        id: 1,
        time : '10:35 a.m',
        eventType : 'Lighting of Lamp'
    },
    {
        id: 2,
        time : '10:40 a.m',
        eventType : 'Introduction of Guests'
    },
    {
        id: 3,
        time : '10:45 a.m',
        eventType : 'Introductory Speech'
    },
    {
        id: 4,
        time : '10:55 a.m',
        eventType : 'Address by the Chief Guest'
    },
    {
        id: 5,
        time : '11:30 a.m',
        eventType : 'Keynote Address (Role and Responsibilities of Universities and Colleges in the context with NEP 2020)'
    },
    {
        id: 6,
        time : '12:15 a.m',
        eventType : 'Vote of Thanks'
    },
    
];

const panelDiscussion = [
    {
        id: 1,
        time : '11:30 a.m',
        eventType : 'Introduction of Panelists'
    },
    {
        id: 2,
        time : '11:35 a.m',
        eventType : 'Remarks by all panelists Topics- 1. Indigenous Knowledge system and role of HEIs 2. Skill Development and Entrepreneurship in HEIs 3. Promoting Quality Research in HEIs'
    },
    {
        id: 3,
        time : '1:35 p.m',
        eventType : 'Adress by Chairperson'
    },
    
];

const valedictory = [
    {
        id: 1,
        time : '2:00 p.m',
        eventType : 'Introduction of Speakers'
    },
    {
        id: 2,
        time : '2:05 p.m',
        eventType : 'Address by the Chief Guest'
    },
    {
        id: 3,
        time : '2:30 p.m',
        eventType : 'Valedictory Address- Role of Teachers in NEP 2020'
    },
    {
        id: 4,
        time : '3:00 p.m',
        eventType : 'Vote of Thanks'
    },
    {
        id: 5,
        time : '3:10 p.m',
        eventType : 'Lunch'
    },
    
];

const EventCalender = () =>{

    return(
       <>
        <h2 className='sub-heading'>Program Schedules</h2>
        <div className='main-calender-container'>
            
            <div className= 'calender-card'>
                <div className='date-card'>
                    <SlCalender className='icon'/>
                    <h3>27 January 2024</h3>
                </div>

                <div className='program-type'>
                    <h4>Registration</h4>
                </div>
                
                <ul className='events'>
                    
                    {
                        registration.map(eachSchedule => (
                            <Schedules key= {eachSchedule.id} data = {eachSchedule} />
                        ))
                    }
                </ul>

                {/* Inaugural Session Details */}
                <div className='program-type'>
                    <h4>Inaugural Session</h4>
                </div>
                
                <ul className='events'>
                    
                    {
                        inaugural.map(eachSchedule => (
                            <Schedules key= {eachSchedule.id} data = {eachSchedule} />
                        ))
                    }
                </ul>


            </div>


                    {/* Panel Discussion Details */}
                    <div className= 'calender-card'>
                <div className='date-card'>
                    <SlCalender className='icon'/>
                    <h3>27 January 2024</h3>
                </div>

                <div className='program-type'>
                    <h4>Panel Discussion</h4>
                </div>
                
                <ul className='events'>
                    
                    {
                        panelDiscussion.map(eachSchedule => (
                            <Schedules key= {eachSchedule.id} data = {eachSchedule} />
                        ))
                    }
                </ul>

                {/* Valedictory Details */}
                <div className='program-type'>
                    <h4>Valedictory</h4>
                </div>
                
                <ul className='events'>
                    
                    {
                        valedictory.map(eachSchedule => (
                            <Schedules key= {eachSchedule.id} data = {eachSchedule} />
                        ))
                    }
                </ul>


            </div>

            
        </div>
        <FeeDetails />
        </>
    )
    
}

export default EventCalender