import React,{Component} from 'react';
import Clock from "./components/Clock"
import CurrentDate from './components/CurrentDate';

 

class App extends Component {
  
  render() {
    return (
      <div>
         <Clock/>
         <CurrentDate/>
      </div>
    );
  }
}

export default App
