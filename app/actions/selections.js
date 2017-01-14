import { UPDATE_SELECTION } from 'actions';

export const updateSelection = (selection) => {
  return {
      type: UPDATE_SELECTION,
      payload: {
          selection
      }
  }
};