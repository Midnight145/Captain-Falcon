import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from 'reducers'

export const configureStore = preloadedState => createStore(
    rootReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);