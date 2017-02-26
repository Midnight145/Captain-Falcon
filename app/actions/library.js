import { POPULATE_SETS } from 'actions';

export const populateSets = (sets) => {
    return {
        type: POPULATE_SETS,
        payload: {
            sets
        }
    }
};