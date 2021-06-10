import React, { Component } from 'react';
import './CreateBuilding.css';

class CreateBuilding extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="create-building">
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Enter building name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="street"
                            placeholder="Enter street name"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="number"
                            placeholder="Enter street number"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="code"
                            placeholder="Enter postal code"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="number"
                            placeholder="Enter street number"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="municipality"
                            placeholder="Enter municipality"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="country"
                            placeholder="Enter country"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateBuilding;