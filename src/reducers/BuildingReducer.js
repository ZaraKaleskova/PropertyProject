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

const defaultState = {
    buildings: [],
    error: nill,
    isLoading: false,
};

const buildingReducer = (state = defaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default buildingReducer;