import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectFilm } from './../actions';

class List extends Component {
  selectFilm = key => e => {
    const { films, selectFilm, history } = this.props;

    e.preventDefault();
    selectFilm(key, films[key]);
    history.push(`/edit/${key}`);
  }

  render() {
    console.log(this.props)
    const { films } = this.props;
    return (
        <ul>
          { Object.keys(films).map(key => (
            <li key={key}>
              <a onClick={this.selectFilm(key)}>{films[key].info.title}</a>
            </li>
          ))}
        </ul>
    );
  }
}

List.propTypes = {
  films: PropTypes.objectOf(PropTypes.shape({
    img: PropTypes.string,
    description: PropTypes.string,
    info: PropTypes.shape({
      title: PropTypes.string,
      originTitle: PropTypes.string,
      year: PropTypes.number,
      country: PropTypes.string,
      tagline: PropTypes.string,
      genre: PropTypes.string,
      cicle: PropTypes.string,
    })
  })),
}

const mapStateToProps = state => ({
  films: state.films,
});

const mapActionToProps = dispatch => ({
  selectFilm: (id, film) => dispatch(selectFilm(id, film)),
});

export default connect(mapStateToProps, mapActionToProps)(List);
