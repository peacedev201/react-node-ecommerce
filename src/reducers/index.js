/**
 * Product Reducers Data
 */
import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Custom Reducers
import productValueReducer from './products';
import filtersValueReducer from './filters';


const rootReducer = combineReducers({
    data: productValueReducer,
    filters: filtersValueReducer,
    Intl
});

export default rootReducer;