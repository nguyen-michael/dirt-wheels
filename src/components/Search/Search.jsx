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
                className="flex flex-row"
                action=""
            >
                {dropdownsArray}
                <input
                    type="submit"
                    value="Search"
                    onClick={this.props.handleSubmit}
                    className="flex-1"
                />
                <input
                    type="reset"
                    value="Clear All"
                    onClick={this.props.handleReset}
                    className="flex-1"
                />
            </form>
        );
    }
}

export default Search;