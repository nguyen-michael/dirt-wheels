import React, { Component } from 'react';
import Dropdown from './Dropdown';

class Search extends Component {

    render() {
        const dropdownsArray = this.props.dropdowns.map(dropdown => {
            return <Dropdown
                name={dropdown.name}
                options={dropdown.options}
                key={dropdown.name}
                handleChange={this.props.handleChange}
            />
        });

        return (
            <form action="">
                {dropdownsArray}
                <input
                    type="submit"
                    value="Search"
                    onClick={this.props.handleSubmit}
                />
            </form>
        );
    }
}

export default Search;