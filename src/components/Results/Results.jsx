import React, { Component } from 'react';

class Results extends Component {
    render() {
        const resultsArray = this.props.results.map((wheel, index) => {
            let bgColor = "bg-gray-200";
            if (index % 2 === 0) {
                bgColor = "bg-transparent"
            }
            
            return (
                <tr key={wheel._id} className={bgColor}>
                    <td className="border px-4 py-2">{wheel.stockID}</td>
                    <td className="border px-4 py-2">{wheel.size}</td>
                    <td className="border px-4 py-2">{wheel.rimMaterial}</td>
                    <td className="border px-4 py-2">{wheel.rimName}</td>
                    <td className="border px-4 py-2">{wheel.hubName}</td>
                    <td className="border px-4 py-2">{wheel.hubSpacing}</td>
                    <td className="border px-4 py-2">{wheel.brake}</td>
                    <td className="border px-4 py-2">{wheel.spokeLengthNDS}</td>
                    <td className="border px-4 py-2">{wheel.spokeLengthDS}</td>
                    <td className="border px-4 py-2">{wheel.notes}</td>
                </tr>
            );
        });

        return (
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="text-gray-800 px-4 py-2">Stock ID</th>
                        <th className="text-gray-800 px-4 py-2">Size</th>
                        <th className="text-gray-800 px-4 py-2">Rim Material</th>
                        <th className="text-gray-800 px-4 py-2">Rim Name</th>
                        <th className="text-gray-800 px-4 py-2">Hub Name</th>
                        <th className="text-gray-800 px-4 py-2">Hub Spacing</th>
                        <th className="text-gray-800 px-4 py-2">Brake</th>
                        <th className="text-gray-800 px-4 py-2">Spoke Length NDS</th>
                        <th className="text-gray-800 px-4 py-2">Spoke Length DS</th>
                        <th className="text-gray-800 px-4 py-2">Notes</th>
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