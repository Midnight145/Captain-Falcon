import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { settings } from './settings';
import { selections } from './selections';

export const rootReducer = combineReducers({
    selections,
    settings,
    routing: routerReducer
});