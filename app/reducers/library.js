import { POPULATE_SETS } from 'actions';

const initialState = {};

export const library = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case POPULATE_SETS:
            const newState = {};
            payload.sets.forEach(set => {
                newState[set.id] = set;
            });
            return Object.assign({}, state, newState);
        default:
            return state;
    }
};