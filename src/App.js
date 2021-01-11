import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'

// function App() {
//   return (
//     <div className="App">
//       <h1>hello</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene"></div>
        <div className="right-scene"></div>
      </div>
    )
  }
}

export default App;
