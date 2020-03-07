import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        const optionsArray = this.props.options.map(item => {
            return <option value={item} key={item}>{item}</option>
        });

        return (
            <div className="flex flex-col flex-1">
                <label
                    htmlFor={this.props.name}
                >
                    <p className="font-semibold text-gray-800 text-center px-4 py-2">
                        {this.props.label}
                    </p>
                </label>
                <select
                    name={this.props.name}
                    onChange={this.props.handleChange}
                    className="border-b-2 mx-2 px-2 bg-gray-200 focus:outline-none focus:bg-white"
                >
                    {optionsArray}
                </select>
            </div>
        );
    }
}

export default Dropdown;