
import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';


const rootReducer = combineReducers({
    moviesReducer: moviesReducer,
});

export default rootReducer;
