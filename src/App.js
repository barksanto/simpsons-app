import './App.css';
import React, { Component } from 'react'
import SearchBar from './components/search_bar'

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
        </div>
        <div className="right-scene">there friend</div>
      </div>
    )
  }
}

export default App;
