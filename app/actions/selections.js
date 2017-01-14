import { UPDATE_SELECTION } from './';

export const updateSelection = (selection) => {
  return {
      type: UPDATE_SELECTION,
      payload: {
          selection
      }
  }
};