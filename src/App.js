
import './App.css';
import EventCalender from './components/EventCalender';
import FeeDetails from './components/FeeDetails';
import ReactSlick from './components/ReactSlick';
import Themes from './components/Themes';

function App() {
  return (
    <div>
      
    <ReactSlick />
    <Themes/> 
    <FeeDetails />
    <EventCalender />
    </div>
    
  );
}

export default App;
