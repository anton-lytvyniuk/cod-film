import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import PropTypes from 'prop-types'

import FilmsList from '../components/FilmsList'
import FilmEdit from './FilmEdit'

import { dictionary } from '../data'

class App extends Component {
  render() {
    const { filmEditId, films, editActionCreator, editAction, closeAction } = this.props;
    return (
      <Grid style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '15px' }}>
        {filmEditId 
          ? <FilmEdit 
            dictionary={dictionary} 
            film={films[filmEditId]} 
            closeAction={closeAction}
            editAction={editAction}
          />
          : <FilmsList 
            dictionary={dictionary} 
            films={films} 
            editActionCreator={editActionCreator}
          />
        }
      </Grid>
    );
  }
}

App.propTypes = {
  editActionCreator: PropTypes.func,
  editAction: PropTypes.func,
  closeAction: PropTypes.func,
  filmEditId: PropTypes.string,
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

export default App;
