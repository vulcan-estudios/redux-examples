import $ from 'jquery';
import { ACTIONS } from './consts';

// Este es un action creator síncrono. Es decir, debemos retornar un objeto
// con la definición del action.
export function fetching (isFetching = false) {
  return {
    type: ACTIONS.FETCHING,
    payload: Boolean(isFetching)
  };
}

export function update (balance = 0) {
  return {
    type: ACTIONS.UPDATE,
    payload: Number(balance)
  };
}

// Esto es un action creator asíncrono. Estos nos permiten devolver en vez
// de la acción a crear, una función. Ésta recibe como primer parámetro el
// dispatch del store y como segundo el getState del store.
// La idea es que aquí definamos tareas a realizar y la lógica de la aplicación
// en donde pueden haber procesos asíncronos.
export function deposit (toDeposit = 0) {
  return function (dispatch, getState) {

    // Por ejemplo, puedo acceder al estado actual para hacer validaciones.
    const { isFetching } = getState();
    if (isFetching) return;

    // Puedo lanzar actions al dispatcher inmediatamente.
    dispatch(fetching(true));

    const value = Number(toDeposit);

    // O puedo realizar tareas asíncronas.
    $.post('/api/deposit', { value }).then(response => {

      // Y lanzar el dispatcher tiempo después.
      dispatch(update(response.balance));
      dispatch(fetching(false));
    });
  };
}

export function withdraw (toWithdraw = 0) {
  return function (dispatch, getState) {

    const { isFetching } = getState();
    if (isFetching) return;

    dispatch(fetching(true));

    const value = Number(toWithdraw);

    $.post('/api/withdraw', { value }).then(response => {
      dispatch(update(response.balance));
      dispatch(fetching(false));
    });
  };
}
