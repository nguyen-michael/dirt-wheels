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
                    {this.props.label}
                </label>
                <select
                    name={this.props.name}
                    onChange={this.props.handleChange}
                >
                    {optionsArray}
                </select>
            </div>
        );
    }
}

export default Dropdown;