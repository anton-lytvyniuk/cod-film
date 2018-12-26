import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import hoc from './hoc';
import * as serviceWorker from './serviceWorker';

// use hardcoded data
// const WrappedApp = hoc('data/films.json')(App);

// use swapi
const WrappedApp = hoc('https://swapi.co/api/films', ({ results }) => results.reduce((acc, value) => ({
  ...acc,
  [value.episode_id]: {
    info: {
      title: value.title,
      country: 'USA',
      genre: 'Боевики, Приключенческие, Фантастические',
      cicle: 'Фильмы Звездные войны, Фильмы про космос',
      year: parseInt(value.release_date.split('-')[0]),
    },
    description: value.opening_crawl.replace('\r\n', ' ')
  }
}), {}))(App);

ReactDOM.render(<WrappedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
