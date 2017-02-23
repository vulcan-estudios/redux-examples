import { ACTIONS } from './consts';

const initial = {
  isFetching: false,
  balance: 0
};

function reducer (state = initial, action) {

  switch (action.type) {

    case ACTIONS.FETCHING: {
      const isFetching = action.payload;
      return { ...state, isFetching };
    }

    case ACTIONS.UPDATE: {
      const balance = action.payload;
      return { ...state, balance };
    }

    default:
      return state;
  }
}

export default reducer;
