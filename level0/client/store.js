// El store se encarga de mantener y acceder el estado de aplicación (datos del
// servidor, datos del cliente y hasta variables de interfaz importantes),
// administrar cambios de estado de acuerdo al reducer proveido e informar a
// subscriptores de tales cambios.

import { createStore } from 'redux';
import reducer from './reducer';

// De acuerdo con el reducer creado, se crea el store.
const store = createStore(reducer);

export default store;
