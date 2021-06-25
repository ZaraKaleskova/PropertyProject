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

export const createBuildingSuccess = (data) => {
    return {
        type: ADD_BUILDING_SUCCESS,
        payload: data,
    }
};

export const createBuildingError = (data) => {
    return {
        type: ADD_BUILDING_SUCCESS,
        payload: data,
    }
};

export const createBuilding = (building) => {
    const data = {
        id: 1,
        name: 'BuildingName',
        street: 'Street Name',
        number: 'Building number',
        code: 'Postal code',
        city: 'City',
        municipality: 'Municipality',
        country: 'Country',
        description: 'Description'  
    }

    return (dispatch) => {
        return axios.post(url, data)
            .then(response => {
                const id = response.data;
                return axios.get(`${url}/${id}`).then((response) => {
                    dispatch(createBookSuccess(response.data));
                }).catch(error => {
                    throw(error);
                });                                        
            })
            .catch(error => {
                throw(error);
            })
    }
}

export const fetchBuildingsSuccess = (data) => {   
    return {
        type: FETCH_BUILDING_SUCCESS,
        payload: data,
    }
}

export const fetchBuildingsLoading = (data) => {
    debugger;
    return {
        type: FETCH_BUILDING_LOADING,
        payload: data,
    }
};

export const fetchBuildingsError = (data) => {
    debugger;
    return {
        type: FETCH_BUILDING_ERROR,
        payload: data,
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

export const fetchBuildings = () => {
    let isLoading = true;
    
    return (dispatch) => {
        dispatch(fetchBuildingsLoading(isLoading));
        return axios.get(url)
        .then(response => {  
            const data = normalizeResponse(response.data);
            dispatch(fetchBuildingsSuccess(data));
            isLoading = false;
            dispatch(fetchBuildingsLoading(isLoading));
        }).catch(error => {
            const errorPayload = {};
            errorPayload['message'] = error.response.data.message;
            errorPayload['status'] = error.response.status;
            dispatch(fetchBuildingsError(errorPayload));

            isLoading = false;
            dispatch(fetchBuildingsLoading(isLoading));
        })
    };
}