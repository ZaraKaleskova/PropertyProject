import React, { Component } from 'react';
import Building from '../components/Building.js';
import { buildings } from '../data.js';
import { connect } from 'react-redux';
import {fetchBuildings} from '../actions/building.actions';
import {deleteBuilding} from '../actions/building.actions';
import {history} from '../index';

class Buildings extends Component {
    constructor(props) {
        super(props);        
    }

    componentWillMount() {
        this.props.onFetch();
    }

    handleEdit(building) {
        history.push({
            pathname: `/edit/${building.id}`,
            state: {
                building: building,
            }
        })
    }

    render() {
        if (this.props.isLoading) {
            return (
                <p>Loading...</p>
            )
        } else if (this.props.error) {
            return (
                <div className="alert alert-danger" role="alert">
                    {this.props.error.message}
                </div>
            )
        } else {
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
                       this.props.buildings.map(building => {
                      return (
                           <Building 
                                key={building.id}
                                building={building}
                                onDelete={this.props.onDelete}
                                onEdit={this.handleEdit.bind(this)} />
                            )
                        })
                    }
                    </tbody>
                    </table>
                </div>
            )
        }
      
    }
}

const mapStateToProps = (state) => {
    return {
        buildings: state.buildingsData.buildings || [],
        error: state.buildingsData.error || null,
        isLoading: state.buildingsData.isLoading,
    };
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchBuildings());
        },

        onDelete: (id) => {
            dispatch(deleteBuilding(id))
        },
    }
};

export default connect(mapStateToProps, null)(Buildings);