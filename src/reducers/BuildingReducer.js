import{
    ADD_BUILDING_ERROR,
    ADD_BUILDING_LOADING,
    ADD_BUILDING_SUCCESS,
    DELETE_BUILDING_ERROR,    
    DELETE_BUILDING_SUCCESS,
    EDIT_BUILDING_ERROR,   
    EDIT_BUILDING_SUCCESS,
    FETCH_BUILDING_ERROR,
    FETCH_BUILDING_LOADING,
    FETCH_BUILDING_SUCCESS
} from '../actions/types';

const defaultState = {
    buildings: [],
    error: null,
    isLoading: false,
};

const buildingReducer = (state = defaultState, action) => {
    switch(action.type) {
        case FETCH_BUILDING_SUCCESS:
            return { ...state, buildings: action.payload };
        case FETCH_BUILDING_LOADING:
            return { ...state, isLoading: action.payload };
            case FETCH_BUILDING_ERROR:
                return { ...state, error: action.payload};
        default:
            return state;
    }
}

export default buildingReducer;