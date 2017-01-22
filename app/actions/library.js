import { ADD_SET, POPULATE_SETS } from 'actions';

export const addSet = (set) => {
    return {
        type: ADD_SET,
        payload: {
            set
        }
    }
};

export const populateSets = (sets) => {
    return {
        type: POPULATE_SETS,
        payload: {
            sets
        }
    }
};