import { ACTIONS } from '../consts';

const initial = {
  list: []
};

export default function reducer (state = initial, action) {

  switch (action.type) {

    case ACTIONS.MESSAGES_RESET: {
      const list = action.payload;
      return { ...state, list };
    }

    case ACTIONS.MESSAGES_ADD: {
      const newItem = action.payload;
      const list = [ ...state.list, newItem ];
      return { ...state, list };
    }

    default:
      return state;
  }
}
