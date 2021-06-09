import React, { Component } from 'react';
import Building from '../components/Building.js';
import { buildings } from '../data.js';

class Buildings extends Component {
    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>name</th>
                    <th>street</th>
                    <th>number</th>
                    <th>code</th>
                    <th>city</th>
                    <th>municipality</th>
                    <th>country</th>
                    <th>description</th>
                </thead>
                <tbody>
                {
                   buildings.map(building => {
                  return (
                       <Building key={building.id} building={building} />
                        )
                    })
                }
                </tbody>
                </table>
            </div>
        )
    }
}

export default Buildings;