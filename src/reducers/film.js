import * as types from './../types';

const initialState = {
  id: null,
  film: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (types.SELECT_FILM):
      return {...action.payload};

    case (types.CHANGE_INFO): {
      const film = state.film;
      const info = {...film.info, [action.payload.key]: action.payload.value};

      return { ...state, film: { ...film, info } }
    }

    case (types.CHANGE_DESCRIPTION): return { ...state, film: { ...state.film, description: action.payload } };

    default: return state;
  };
};