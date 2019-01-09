import * as types from './../types';

export const selectFilm = film => ({
  type: types.SELECT_FILM,
  payload: film,
});

export const changeInfo = (key, value) => ({
  type: types.CHANGE_INFO,
  payload: { key, value }
});

export const changeDescription = value => ({
  type: types.CHANGE_DESCRIPTION,
  payload: value
});

export const saveFilm = (id, film) => ({
  type: types.SAVE_FILM,
  payload: { id, film },
});
