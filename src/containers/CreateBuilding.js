import React, { Component } from 'react';
import {createBuilding} from '../actions/building.actions';
import {connect} from 'redux-redux';
import './CreateBuilding.css';

class CreateBuilding extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            name: '',
            street: '',
            number: '',
            code: '',
            city: '',
            municipality: '',
            country: '',
            description: '',
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state);
    }

    handleOnValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            name: '',
            street: '',
            number: '',
            code: '',
            city: '',
            municipality: '',
            country: '',
            description: '',
        });
    }

    render() {
        return (
            <div className="create-building">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter building name"
                            value={this.state.name}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="street"
                            placeholder="Enter street name"
                            value={this.state.street}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="number"
                            placeholder="Enter street number"
                            value={this.state.number}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="code"
                            placeholder="Enter postal code"
                            value={this.state.code}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="strnumber"
                            placeholder="Enter street number"
                            value={this.state.strname}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="municipality"
                            placeholder="Enter municipality"
                            value={this.state.municipality}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="country"
                            placeholder="Enter country"
                            value={this.state.country}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                            value={this.state.description}
                            onChange={this.handleOnValueChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default"
                            onClick={this.handleReset.bind(this)}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (building) => {
            dispatch(createBuilding(building));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBuilding);