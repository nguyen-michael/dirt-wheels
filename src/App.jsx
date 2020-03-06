import React, { Component } from 'react';
import './App.css';
import Results from './components/Results/Results';
import Search from './components/Search/Search';

const dropdownSettings = [
  {
    name: "stockID",
    options: ["", "A", "B", "C", "D", "E"]
  },
  {
    name: "size",
    options: ["", "27.5", "29"]
  },
  {
    name: "rimMaterial",
    options: ["", "Alloy", "Carbon"]
  },
  {
    name: "rimName",
    options: ["", "RC", "RC30", "RC36", "XC", "DE40"]
  },
  {
    name: "HubName",
    options: ["", "Dirt", "i9 Hydra", "i9 1/1", "i9 Torch"]
  },
  {
    name: "hubSpacing",
    options: ["", "100", "110", "135/142", "148"]
  },
  {
    name: "brake",
    options: ["", "6B", "CL"]
  }
]

class App extends Component {
  state = { wheels: [] }

  // Testing get all wheel data on-load. Proxy functional!
  // componentDidMount() {
  //   fetch('/wheels')
  //     .then(res => res.json())
  //     .then(wheels => this.setState({ wheels }));
  // }

  render() {
    return (
      <div>
        <Search dropdowns={dropdownSettings} />
        <Results />
      </div>
    );
  }
}

export default App;