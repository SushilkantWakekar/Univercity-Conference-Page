import Schedules from '../Schedules';
import './index.css'
import { SlCalender } from "react-icons/sl";

const schedules = [
    {
        id: 1,
        imageUrl : 'https://illustoon.com/photo/5054.png',
        time : '14.00',
        venue : 'Alfa Hall'
    },
    {
        id: 2,
        imageUrl : 'https://illustoon.com/photo/5054.png',
        time : '14.00',
        venue : 'Alfa Hall'
    },
    {
        id: 3,
        imageUrl : 'https://illustoon.com/photo/5054.png',
        time : '14.00',
        venue : 'Alfa Hall'
    }

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
                <ul>
                    {
                        schedules.map(eachSchedule => (
                            <Schedules key= {eachSchedule.id} data = {eachSchedule} />
                        ))
                    }
                </ul>
            </div>

            <div className= 'calender-card'>
                <div className='date-card'>
                    <SlCalender className='icon'/>
                    <h3>27 January 2024</h3>
                </div>
                <ul>
                    {
                        schedules.map(eachSchedule => (
                            <Schedules key= {eachSchedule.id} data = {eachSchedule} />
                        ))
                    }
                </ul>
            </div>
        </div>
        </>
    )
    
}

export default EventCalender