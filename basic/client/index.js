import 'babel-polyfill';

import $ from 'jquery';
import store from './store';
import { counterAdd, counterSubtract } from './actions-creators';

// Una función que acorde al state actual del store, actualiza la interfaz.
function render () {
  const state = store.getState();  // Conseguimos el estado actual.
  const { counter } = state;
  $('#value').text(counter);
}

// Se renderiza inicialmente con los datos iniciales.
render();

// Si ocurre cualquier cambio de estado en el store, se actualiza la interfaz.
store.subscribe(() => render());

// Se ocurre un evento en la interfaz que necesite cambiar el estado, se despacha
// un action al store, ella decidirá qué hacer con ello.
$('#add').on('click', () => {
  store.dispatch(counterAdd(1));
});

// Lo mismo aquí, se despacha un action al store desde la interfaz.
$('#subtract').on('click', () => {
  store.dispatch(counterSubtract(1));
});
