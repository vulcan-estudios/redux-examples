// Es recomendado dividir los actions creators por categoría,
// de la misma manera como dividimos los reducers.

import { ACTIONS } from '../consts';

export const resetUsers = (data) => {
  return {
    type: ACTIONS.USERS_RESET,
    payload: data
  };
};

export const addUser = (data) => {
  return {
    type: ACTIONS.USERS_ADD,
    payload: data
  };
};

export const onlineUser = (data) => {
  return {
    type: ACTIONS.USERS_ONLINE,
    payload: data
  };
};

export const typingUser = (data) => {
  return {
    type: ACTIONS.USERS_TYPING,
    payload: data
  };
};
