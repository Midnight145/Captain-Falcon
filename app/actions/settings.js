import { UPDATE_SETTINGS } from 'actions';

export const updateSettings = (settings) => {
  return {
      type: UPDATE_SETTINGS,
      payload: {
          settings
      }
  }
};