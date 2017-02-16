// En el reducer se define cómo se cambia el estado de aplicación, de acuerdo a
// los actions. Estos cambios deben ser inmutables.

import { ACTIONS } from './consts';

// Sino existe un estado, se define su estado inicial.
const initial = {
  counter: 0
};

// Un reducer recibe el state actual y el action que intenta cambiar el estado.
// Si el state no está definido, se asigna un state inicial.
// El action debe ser un objeto de principalmente dos propiedades, una constante
// usualmente string que identifica el cambio llamada type, y los datos opcionales
// de cambio llamada payload.
function reducer (state = initial, action) {

  // Se usa un switch para filtrar el action.type y se retorna el nuevo state
  // en cada caso. De no encontrarse el type, se retorna el state sin cambios.
  switch (action.type) {

    // El type debe ser una constante y debido a que se utilizará por fuera del
    // reducer, se define en otro archivo de constantes y se usa aquí.
    case ACTIONS.COUNTER_ADD: {
      const addToCounter = action.payload;
      const counter = state.counter + addToCounter;
      const newState = { ...state, counter };  // Nuevo cambio inmutable.
      return newState;
    }

    case ACTIONS.COUNTER_SUBTRACT: {
      const subtractToCounter = action.payload;
      const counter = state.counter - subtractToCounter;
      const newState = { ...state, counter };
      return newState;
    }

    // Si el action.type no se encontró, retorne sin cambios.
    default:
      return state;
  }
}

export default reducer;
