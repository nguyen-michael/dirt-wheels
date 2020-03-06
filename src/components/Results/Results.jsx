import React, { Component } from 'react';

class Results extends Component {
    render() {
        const resultsArray = this.props.results.map(wheel => {
            return (
                <tr key={wheel._id}>
                    <td>{wheel.stockID}</td>
                    <td>{wheel.size}</td>
                    <td>{wheel.rimMaterial}</td>
                    <td>{wheel.rimName}</td>
                    <td>{wheel.hubName}</td>
                    <td>{wheel.hubSpacing}</td>
                    <td>{wheel.brake}</td>
                    <td>{wheel.spokeLengthNDS}</td>
                    <td>{wheel.spokeLengthDS}</td>
                    <td>{wheel.notes}</td>
                </tr>
            );
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Stock ID</th>
                        <th>Size</th>
                        <th>Rim Material</th>
                        <th>Rim Name</th>
                        <th>Hub Name</th>
                        <th>Hub Spacing</th>
                        <th>Brake</th>
                        <th>Spoke Length NDS</th>
                        <th>Spoke Length DS</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {resultsArray}
                </tbody>
            </table>
        );
    }
}

export default Results;