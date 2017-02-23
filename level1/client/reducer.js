import { ACTIONS, ENGINE } from './consts';

const initial = {

  // Si el carro está prendido o no.
  power: false,

  // En qué marcha se encuenra? 0 detenido, número positivo hacia adelante,
  // número negativo en reversa.
  march: 0,

  // Revoluciones por minuto.
  rpm: 0
};

function reducer (state = initial, action) {
  switch (action.type) {

    case ACTIONS.POWER_UPDATE: {

      let power = !!action.payload;
      let rpm = 0;

      if (state.power === power) {
        return state;
      }

      // Para prender el carro, tiene que estar en neutro.
      if (power && state.march) {
        power = false;
      }

      // Si se quiere prender el carro de neutro.
      if (power) {
        rpm = ENGINE.RPM_INITIAL;
      }

      return { ...state, power, rpm };
    }

    case ACTIONS.MARCH_UPDATE: {

      let march = Number(action.payload);
      let rpm = 0;

      // El carro está prendido.
      if (state.power) {
        rpm = march === 0 ?
          ENGINE.RPM_INITIAL :
          Math.abs(march * ENGINE.RPM_FACTOR);
      }

      return { ...state, march, rpm };
    }

    default:
      return state;
  }
}

export default reducer;
