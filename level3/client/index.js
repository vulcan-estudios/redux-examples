import $ from 'jquery';
import uuid from 'uuid';
import mocks from './mocks';
import store from './store';
import { addUser, onlineUser, typingUser } from './actions/users';
import { addMessage } from './actions/messages';

// Actualizar la interfaz
function uiUpdate () {

  const { users, messages } = store.getState();

  // Usuarios
  $('#users').html('');
  users.list.forEach(user => {
    const status = user.online ? 'user--online' : '';
    $('#users').append(`<div class="user ${status}">${user.name}</div>`);
  });

  // Mensajes
  $('#messages').html('');
  messages.list.forEach(message => {
    const { name } = users.list.find(usr => usr.id === message.user);
    $('#messages').append(`<div class="message"><b>${name}</b>: ${message.text}</div>`);
  });

  // User typing
  if (users.typingUserId) {
    const { name } = users.list.find(usr => usr.id === users.typingUserId);
    $('#messages').append(`<i><b>${name}</b> está escribiendo...</i>`);
  }
}

// Actualizar interfaz al haber cambios en el store
store.subscribe(() => uiUpdate());

// Actualizar la interfaz
uiUpdate();


// -------------------------------------------------------------------------- //
// Simular el chat //

// Generar un índice random de una cantidad dada de array
function random (length = 2) {
  return Math.round(Math.random() * (length - 1));
}

// Simular: agregar nuevo usuario arbitrario
function uiAddUser () {

  const ni = random(mocks.names.length);
  const si = random(mocks.surnames.length);

  const id = uuid.v4();
  const name = mocks.names[ni] + ' ' + mocks.surnames[si];
  const online = !random();
  const user = { id, name, online };

  store.dispatch(addUser(user));
}

// Simular: cambiar el estado de un usuario arbitrario
function uiChangeUserStatus () {

  const { users } = store.getState();
  const index = random(users.list.length);
  const { id } = users.list[index];
  const online = !random();

  store.dispatch(onlineUser({ id, online }));
}

// Simular: un usuario arbitrario escribe un mensaje arbitrario
function uiAddNewMessage () {

  const { users } = store.getState();
  const ui = random(users.list.length);
  const pi = random(mocks.phrases.length);

  const id = uuid.v4();
  const { id: user } = users.list[ui];
  const text = mocks.phrases[pi];
  const message = { id, user, text };

  store.dispatch(typingUser(user));

  setTimeout(() => {
    store.dispatch(addMessage(message));
    store.dispatch(typingUser(null));
  }, 1000);
}

// Agregar 2 usuarios iniciales
uiAddUser();
uiAddUser();

// Cada 5s, agregar un nuevo usuario
setInterval(uiAddUser, 5000);

// Cada 1s cambiar el estado de algún usuario
setInterval(uiChangeUserStatus, 1000);

// Cada 2.5s, agregar un nuevo mensaje
setInterval(uiAddNewMessage, 2500);
