import './App.css';
import React, { Component } from 'react'
import SearchBar from './components/search_bar'
import Gif from './components/gif'
import GifList from './components/gif_list'
import giphy from 'giphy-api'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    }
    this.search('homer thinking');
  }

  search = (query) => {
    // TODO: API call
    giphy('HMO5ACcoAHDTdcKnJYtP7tD9neU7DIAu').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      // result contains gif data!
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    const gifs = [
      { id: "xT9IgDEI1iZyb2wqo8" },
      { id: "xT9IgDEI1iZyb2wqo8" }
    ];

    return (
      <div>
        <div className="left-scene">
          {/* we pass the search function - the app will pass to its child searchbar   */}
          {/* a prop named search which contains the search function defined in app.js */}
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    )
  }
}

export default App;
