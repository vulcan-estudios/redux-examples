import { ACTIONS } from '../consts';

const initial = {
  typingUserId: null,
  list: []
};

export default function reducer (state = initial, action) {

  switch (action.type) {

    case ACTIONS.USERS_RESET: {
      const list = action.payload;
      return { ...state, list };
    }

    case ACTIONS.USERS_ADD: {
      const newItem = action.payload;
      const list = [ ...state.list, newItem ];
      return { ...state, list };
    }

    case ACTIONS.USERS_ONLINE: {
      const itemOnline = action.payload;
      const list = state.list.map(item => {
        if (item.id === itemOnline.id) {
          return { ...item, online: itemOnline.online };
        }
        return item;
      });
      return { ...state, list };
    }

    case ACTIONS.USERS_TYPING: {
      const userId = action.payload;
      return { ...state, typingUserId: userId };
    }

    default:
      return state;
  }
}
