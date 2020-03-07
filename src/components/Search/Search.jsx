import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Search extends Component {

    render() {
        const dropdownsArray = this.props.dropdowns.map(dropdown => {
            return <Dropdown
                label={dropdown.label}
                name={dropdown.name}
                options={dropdown.options}
                key={dropdown.name}
                handleChange={this.props.handleChange}
            />
        });

        return (
            <form
                className="flex flex-row my-6"
                action=""
            >
                {dropdownsArray}
                <input
                    type="submit"
                    value="Search"
                    onClick={this.props.handleSubmit}
                    className="
                        flex-1 
                        hover:bg-gray-300 
                        bg-gray-800
                        hover:text-gray-800
                        text-white
                        font-bold
                        border
                        border-gray-400
                        rounded
                "
                />
                <input
                    type="reset"
                    value="Clear All"
                    onClick={this.props.handleReset}
                    className="
                        flex-1 
                        hover:bg-red-300 
                        bg-red-800
                        text-white
                        hover:text-gray-800
                        font-bold
                        border
                        border-gray-400
                        rounded
                    "
                />
            </form>
        );
    }
}

export default Search;