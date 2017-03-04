// Es recomendado dividir los actions creators por categoría,
// de la misma manera como dividimos los reducers.

import { ACTIONS } from '../consts';

export const resetMessages = (data) => {
  return {
    type: ACTIONS.MESSAGES_RESET,
    payload: data
  };
};

export const addMessage = (data) => {
  return {
    type: ACTIONS.MESSAGES_ADD,
    payload: data
  };
};
