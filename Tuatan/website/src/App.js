import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav';
import CarouselImage from './Component/CarouselImage';
import Top10 from './Component/Top10';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br />
        <CarouselImage />
        <br />
        <Top10 />
      </div>
    );
  }
}

export default App;
