import { UPDATE_SELECTION } from 'actions';

const initialState = {
    algSet: 'PLL',
    subSet: false,
    loaded: true
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