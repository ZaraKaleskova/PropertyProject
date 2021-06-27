import React from 'react';

const Building = ({building, onDelete, onEdit}) => {
    return (
        <tr>
        <td>{building.id}</td>
        <td>{building.name}</td>
        <td>{building.street}</td>
        <td>{building.number}</td>
        <td>{building.code}</td>
        <td>{building.city}</td>
        <td>{building.municipality}</td>
        <td>{building.country}</td>
        <td>{building.description}</td>
        <td>
            <button type="button" className="btn btn-danger"
            onClick={() => onDelete(building.id)}>
                Delete
            </button>
            <button type="button" className="btn btn-danger"
                onClick={() => onEdit(building)}>
                Edit
            </button>
        </td>
    </tr>
    )
}

export default Building;