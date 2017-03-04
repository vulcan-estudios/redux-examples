import $ from 'jquery';
import store from './store';
import { deposit, withdraw } from './actions-creators';

// Una función que acorde al state actual del store, actualiza la interfaz.
function updateUI () {
  const state = store.getState();  // Conseguimos el estado actual.
  const { balance } = state;
  $('#balance').text(balance);
}

// Se renderiza inicialmente con los datos iniciales.
updateUI();

// Si ocurre cualquier cambio de estado en el store, se actualiza la interfaz.
store.subscribe(() => updateUI());

// Se ocurre un evento en la interfaz que necesite cambiar el estado, se despacha
// un action al store, ella decidirá qué hacer con ello.
$('#deposit').on('click', () => {
  store.dispatch(deposit(10));
});

// Lo mismo aquí, se despacha un action al store desde la interfaz.
$('#withdraw').on('click', () => {
  store.dispatch(withdraw(5));
});
