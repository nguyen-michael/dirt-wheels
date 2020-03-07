import React, { Component } from 'react';
import Results from './components/Results/Results';
import Search from './components/Search/Search';

// Preseed data for dropdown boxes
const dropdownSettings = [
    {
        label: "Stock ID",
        name: "stockID",
        options: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    },
    {
        label: "Wheel Size",
        name: "size",
        options: ["", "27.5", "29"]
    },
    {
        label: "Rim Material",
        name: "rimMaterial",
        options: ["", "Alloy", "Carbon"]
    },
    {
        label: "Rim Name",
        name: "rimName",
        options: ["", "RC30", "RC36", "XC", "DE40"]
    },
    {
        label: "Hub Name",
        name: "hubName",
        options: ["", "Dirt", "i9 Hydra", "i9 1/1", "i9 Torch"]
    },
    {
        label: "Hub Spacing",
        name: "hubSpacing",
        options: ["", "100", "110", "135/142", "148"]
    },
    {
        label: "Brake",
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
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // console.log(`Submit clicked, search query is \n ${JSON.stringify(this.state.searchQuery, null, 4)}`);

        let requestUrl = '/wheels/search/?';

        Object.entries(this.state.searchQuery).forEach(entry => {
            // If empty string, exclude from search functionality
            // That is: Empty string is wildcard.
            if (entry[1] !== "") {
                requestUrl = requestUrl + entry[0] + "=" + entry[1] + "&";
            }
        });

        // console.log(`Our Request body is \n ${JSON.stringify(requestBody, null, 4)}`);
        // console.log(requestUrl);

        const requestParameters = {
            method: 'GET'
        };

        fetch(requestUrl, requestParameters)
            .then(res => res.json())
            .then(found => this.setState({
                results: found
            }));
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

    handleReset(e) {
        this.setState({
            searchQuery: {
                stockID: "",
                size: "",
                rimMaterial: "",
                rimName: "",
                hubName: "",
                hubSpacing: "",
                brake: ""
            }
        });
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
                <h1 className="text-4xl  text-center text-gray-800 my-8">
                    DIRT COMPONENTS WHEEL DIRECTORY
                </h1>
                <Search
                    dropdowns={dropdownSettings}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    handleReset={this.handleReset}
                />
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default App;