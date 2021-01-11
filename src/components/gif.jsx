import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = 'https://media1.giphy.com/media/4MHv5aIo6SI2A/giphy.gif?cid=ecf05e473b8ef728fb5508d84bc5b620a3bcd04f2c69f907&rid=giphy.gif';
    return (
      <img src={src} alt="" className="gif" />
    )
  }
}

export default Gif;