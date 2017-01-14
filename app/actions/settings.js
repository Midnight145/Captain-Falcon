import { UPDATE_SETTINGS } from './';

export const updateSettings = (settings) => {
  return {
      type: UPDATE_SETTINGS,
      payload: {
          settings
      }
  }
};