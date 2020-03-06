import React, { Component } from 'react';
import './App.css';
import Results from './components/Results/Results';
import Search from './components/Search/Search';

class App extends Component {
  state = {wheels: []}

  // Testing get all wheel data on-load. Proxy functional!
  // componentDidMount() {
  //   fetch('/wheels')
  //     .then(res => res.json())
  //     .then(wheels => this.setState({ wheels }));
  // }

  render() {
    return (
      <div>
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;