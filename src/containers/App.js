import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import FilmsList from '../components/FilmsList'
import FilmEdit from './FilmEdit'

import { dictionary, films } from '../data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films,
      filmEditId: null,
    };
  }

  editActionCreator = key => () => this.setState({ filmEditId: key })

  closeAction = () => this.setState({ filmEditId: null })

  editAction = film => this.setState({
    films: { ...this.state.films, [this.state.filmEditId]: film },
    filmEditId: null,
  })

  render() {
    const { filmEditId, films } = this.state;

    return (
      <Grid style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '15px' }}>
        {filmEditId 
          ? <FilmEdit 
            dictionary={dictionary} 
            film={films[filmEditId]} 
            closeAction={this.closeAction}
            editAction={this.editAction}
          />
          : <FilmsList 
            dictionary={dictionary} 
            films={films} 
            editActionCreator={this.editActionCreator}
          />
        }
      </Grid>
    );
  }
}

export default App;
