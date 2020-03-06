import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {wheels: []}

  // Testing get all wheel data on-load. Proxy functional!
  componentDidMount() {
    fetch('/wheels')
      .then(res => res.json())
      .then(wheels => this.setState({ wheels }));
  }

  render() {
    return (
      <div>
        words
      </div>
    );
  }
}

export default App;