import { UPDATE_SETTINGS } from 'actions';

const initialState = {
    view: false,
    size: 100
};

export const settings = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_SETTINGS:
            return Object.assign({}, state, payload.settings);
        default:
            return state;
    }
};