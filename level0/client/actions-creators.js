// Los actions definen la forma de comunicar cambios al store desde fuentas externas.
// Se tiene un módulo que se encarga de crear estos actions mediante funciones,
// éste es actions creators.

import { ACTIONS } from './consts';

// Se usan funciones que reciben los datos de cambio y éstas funciones retornan
// un objeto de action.
export function deposit (value = 0) {
  return {
    type: ACTIONS.DEPOSIT,
    payload: Number(value)
  };
}

export function withdraw (value = 0) {
  return {
    type: ACTIONS.WITHDRAW,
    payload: Number(value)
  };
}
