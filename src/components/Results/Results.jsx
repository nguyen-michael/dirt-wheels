import React, { Component } from 'react';

class Results extends Component {
    render() {
        return (
            <table>
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
                {/* code to generate the rest of the td rows */}
            </table>
        );
    }
}

export default Results;