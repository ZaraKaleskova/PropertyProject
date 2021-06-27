import{
    ADD_BUILDING_ERROR,
    ADD_BUILDING_LOADING,
    ADD_BUILDING_SUCCESS,
    DELETE_BUILDING_ERROR,
    DELETE_BUILDING_LOADING,
    DELETE_BUILDING_SUCCESS,
    EDIT_BUILDING_ERROR,
    EDIT_BUILDING_LOADING,
    EDIT_BUILDING_SUCCESS,
    FETCH_BUILDING_ERROR,
    FETCH_BUILDING_LOADING,
    FETCH_BUILDING_SUCCESS
} from './types';
import axios from 'axios';
import {history} from '../index';

const url = 'http://localhost:3000/buildings';

export const createBuilding = (building) => {  
    if (building.id) {
        const data = {
            ID: building.id,            
            name: building.name,
            street: building.street,
            number: building.number,
            code: building.code,
            city: buidling.city,
            municipality: buidling.municipality,
            country: buidling.country,
            description: building.description,  
        };

        return (dispatch) => {
            updateBuilding(dispatch, data);
        }
    } else {
        const data = {
            name: building.name,
            street: building.street,
            number: building.number,
            code: building.code,
            city: buidling.city,
            municipality: buidling.municipality,
            country: buidling.country,
            description: building.description,  
        };

        return (dispatch) => {
            return axios.post(url, data)
                .then(response => {
                    const id = response.data;
                    return axios.get(`${url}/${id}`).then((response) => {
                        dispatch(createBuildingSuccess(response.data));
                    }).catch(error => {
                        throw(error);
                    });                                        
                })
                .catch(error => {
                    throw(error);
                })
        }
    }
};

export const createBuildingSuccess = (building) => {
    return {
        type: ADD_BUILDING_SUCCESS,
        payload: {
            ID: building.id,            
            name: building.name,
            street: building.street,
            number: building.number,
            code: building.code,
            city: buidling.city,
            municipality: buidling.municipality,
            country: buidling.country,
            description: building.description,  
        }
    }
};

export const updateBuildingSuccess = (building) => {
    return {
        type: EDIT_BUILDING_SUCCESS,
        payload: {
            ID: building.id,            
            name: building.name,
            street: building.street,
            number: building.number,
            code: building.code,
            city: buidling.city,
            municipality: buidling.municipality,
            country: buidling.country,
            description: building.description,  
        },
    };
};

const updateBuilding = (dispatch, data) => {
    const id = data.ID;
    return axios.put(url, data)
        .then(() => {          
            return axios.get(`${url}/${id}`).then((response) => {
                dispatch(updateBuildingSuccess(response.data));
            }).catch((error) => {
                throw(error);
            });    
        })
        .catch(error => {
            throw(error);
        });
};

export const deleteBuildingSuccess = (id) => {
    return {
        type: DELETE_BUILDING_SUCCESS,
        payload: {
            id: id,
        }
    }
};

export const deleteBuildingError = (data) => {
    return {
        type: DELETE_BUILDING_ERROR,
        payload: data,
    }
}

export const deleteBuilding = (id) => {
    return (dispatch) => {
        return axios.delete(`${url}/${id}`)
            .then(() => {
                dispatch(deleteBuildingSuccess(id));
            }).catch(error => {
                throw(error);
            })
    }
};

export const fetchBuildings = (buildings) => {
    return {
        type: FETCH_BUILDING_SUCCESS,
        payload: buildings,
    }
}

const normalizeResponse = (data) => {
    const arr = data.map(item => {
        const keys = Object.keys(item);

        keys.forEach(k => {
            item[k.toLowerCase()] = item[k];
            delete item[k];
        });

        return item;
    });

    return arr;
};

export const fetchAllBuildings = () => {    
    return (dispatch) => {
        return axios.get(url)
            .then(response => {  
                //convert attributes from uppercase to lowercase
                const data = normalizeResponse(response.data);
                dispatch(fetchBuildings(data));
            }).catch(error => {
                throw(error);
            })
    };
};

      