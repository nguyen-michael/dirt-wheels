import React, { Component } from 'react';

class Dropdown extends Component {
    render() {
        const optionsArray = this.props.options.map(item => {
            return <option value={item} key={item}>{item}</option>
        });

        return (
            <>
                <label htmlFor={this.props.name}>
                    {this.props.name}
                </label>
                <select
                    name={this.props.name}
                    id=""
                    onChange={this.props.handleChange}
                >
                    {optionsArray}
                </select>
            </>
        );
    }
}

export default Dropdown;