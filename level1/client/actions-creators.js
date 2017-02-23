import { ACTIONS } from './consts';

export function powerUpdate (power) {
  return {
    type: ACTIONS.POWER_UPDATE,
    payload: power
  };
}

export function marchUpdate (march) {
  return {
    type: ACTIONS.MARCH_UPDATE,
    payload: march
  };
}
