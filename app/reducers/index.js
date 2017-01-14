import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { settings } from './settings';

export const rootReducer = combineReducers({
    settings,
    routing: routerReducer
});