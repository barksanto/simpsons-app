import './App.css';
import React, { Component } from 'react'
import SearchBar from './components/search_bar'
import Gif from './components/gif'

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="xT9IgDEI1iZyb2wqo8" />
          </div>
        </div>
        <div className="right-scene">there friend</div>
      </div>
    )
  }
}

export default App;
