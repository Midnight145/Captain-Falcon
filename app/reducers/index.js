import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { library } from './library';
import { settings } from './settings';
import { selections } from './selections';

export const rootReducer = combineReducers({
    library,
    selections,
    settings,
    routing: routerReducer
});