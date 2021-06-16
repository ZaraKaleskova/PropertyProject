import {combineReducers} from 'redux';
import buildings from './BuildingReducer';

export default combineReducers({
    buildingsData: buildings,
});

