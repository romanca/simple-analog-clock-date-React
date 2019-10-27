import React,{Component} from 'react';
import Circle from "./components/Circle"
import CurrentDate from './components/CurrentDate';

 

class App extends Component {
  
  render() {
    return (
      <div>
         <Circle/>
         <CurrentDate/>
      </div>
    );
  }
}

export default App
