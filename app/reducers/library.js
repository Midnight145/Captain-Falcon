import { ADD_SET, POPULATE_SETS } from 'actions';

const initialState = [];

export const library = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_SET:
            return [].concat(state).push(payload.set);
        case POPULATE_SETS:
            return state.concat(payload.sets);
        default:
            return state;
    }
};