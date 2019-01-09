import * as types from './../types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case (types.SELECT_FILM):
      return { ...action.payload };

    case (types.CHANGE_INFO): {
      const info = { ...state.info, [action.payload.key]: action.payload.value};

      return { ...state, info }
    }

    case (types.CHANGE_DESCRIPTION): return { ...state, description: action.payload };

    default: return state;
  };
};