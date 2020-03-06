import React, { Component } from 'react';
import Results from './components/Results/Results';
import Search from './components/Search/Search';

// Preseed data for dropdown boxes
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
        name: "hubName",
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
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            searchQuery: {
                stockID: "",
                size: "",
                rimMaterial: "",
                rimName: "",
                hubName: "",
                hubSpacing: "",
                brake: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        // console.log(`Submit clicked, search query is \n ${JSON.stringify(this.state.searchQuery, null, 4)}`);
    }

    handleChange(e) {
        // Change the state in here!
        // Collect previous state to avoid complete overwrite
        // console.log(`The ${e.target.name} dropdown was changed to ${e.target.value}!`);

        let name = e.target.name;
        let value = e.target.value;

        const newSearchQuery = this.state.searchQuery
        newSearchQuery[name] = value

        this.setState({ searchQuery: newSearchQuery });
    }

    /*   Testing get all wheel data on-load. Proxy functional!
      componentDidMount() {
        fetch('/wheels')
          .then(res => res.json())
          .then(wheels => this.setState({ wheels }));
      } */

    render() {
        return (
            <div>
                <Search
                    dropdowns={dropdownSettings}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
                <Results />
            </div>
        );
    }
}

export default App;