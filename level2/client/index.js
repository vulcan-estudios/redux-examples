import $ from 'jquery';
import store from './store';
import { fetching, update, deposit, withdraw } from './actions-creators';

function render () {
  const { isFetching, balance } = store.getState();
  $('#fetching').text(isFetching ? '(Actualizando...)' : '');
  $('#balance').text(balance);
}

render();

store.subscribe(() => render());

$('#deposit').on('click', () => {

  // De la misma manera como hacemos con un action creator síncrono,
  // podemos llamar al dispatcher con actions creators asíncronos.
  store.dispatch(deposit(10));
});

$('#withdraw').on('click', () => {
  store.dispatch(withdraw(5));
});

// Para conseguir los datos iniciales podemos mostrar el loader
// y pedir los datos al servidor.
store.dispatch(fetching(true));

// Cuando los recibamos, actualizamos el store y removemos el loader.
$.get('/api/store').then(response => {
  store.dispatch(update(response.balance));
  store.dispatch(fetching(false));
});
