import cityListReducer from './cityList';
import searchReducer from './search';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    search: searchReducer,
    cities: cityListReducer
});

export default rootReducer;