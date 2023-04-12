import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import HomePage from './components/MainPage';
import SampleSurvey from './components/SampleSurvey';
import SensorySurvey from './components/SensorySurvey';
function App() {
  return (
    <div className="App">
      <HomePage/>
        <Switch>
        <Route path='/samplesurvey'>
          <SampleSurvey/>
        </Route>
        <Route path='/sensorysurvey'>
          <SensorySurvey/>
        </Route>
        <Route path='/'>
        </Route>
        </Switch>
    </div>
  );
}

export default App;
