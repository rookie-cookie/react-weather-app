import './App.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="container weather-body">
          <div className="weather-header">
            <h3>Weather Report  <FaMapMarkerAlt /></h3>
          </div>
          {/* <Weather /> */}
       
        </div>
        <div className="container ">
          <div className="weather-footer">
            <p>Made by Jona Reyes</p>
          </div>
        </div>
      </div>
       
    </div>
  );
}

export default App;
