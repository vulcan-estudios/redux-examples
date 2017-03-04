// Podemos dividir reducers en diferentes modulos y luego combinarlos
// en uno solo, sin embargo cada reducer quedará a cargo de una parte
// del state del store.

import { combineReducers } from 'redux';

import users from './users';
import messages from './messages';

export default combineReducers({
  users,
  messages
});
