import './index.css'

const Schedules = props => {
    const {data} = props ;
    const {imageUrl,time,venue} = data ;
    return(
        <li className= 'schedule-card'>
            <div className='clock-container'>
                <img src = {imageUrl} className='clock-img' alt='clock'/>
            </div>
            <div className="card">
                <h4>{time}</h4>
            </div>
            <div className="card">
                <h4>{venue}</h4>
            </div>    
        </li>
    )
}


export default Schedules