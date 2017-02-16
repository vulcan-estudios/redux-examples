// Los actions definen la forma de comunicar cambios al store desde fuentas externas.
// Se tiene un módulo que se encargar de crear estos actions mediante funciones,
// éste es actions creators.

import { ACTIONS } from './consts';

// Se usan funciones que reciben los datos de cambio y éstas funciones retornan
// un objeto de action.
export function counterAdd (counter) {
  return {
    type: ACTIONS.COUNTER_ADD,
    payload: Number(counter) || 0
  };
}

export function counterSubtract (counter) {
  return {
    type: ACTIONS.COUNTER_SUBTRACT,
    payload: Number(counter) || 0
  };
}
