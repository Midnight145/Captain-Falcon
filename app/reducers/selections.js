import { UPDATE_SELECTION } from 'actions';

const initialState = {
    set: null,
    subSet: null,
    setLoaded: false,
    subSetLoaded: false
};

export const selections = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_SELECTION:
            return Object.assign({}, state, payload.selection);
        default:
            return state;
    }
};