import React, { Component } from 'react'
import { ButtonGroup, Panel, Button  } from 'react-bootstrap'
import PropTypes from 'prop-types'

import FilmDecription from './FilmDescription'

class FilmsList extends Component {
    render() {
        const { films, dictionary, editActionCreator } = this.props; 
        const filmsList = Object.keys(films).map(key =>
            <Panel key={key} >
                <Panel.Heading>
                    <Panel.Title componentClass='h2' className='text-primary'>
                        {films[key].info.title}/{films[key].info.originTitle}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <FilmDecription 
                        film={films[key]} 
                        dictionary={dictionary}
                    />
                    <ButtonGroup style={{float: 'right', paddingTop: '15px'}}>
                        <Button bsStyle='danger' onClick={editActionCreator(key)}>{dictionary.edit}</Button>
                    </ButtonGroup>
                </Panel.Body>
            </Panel>
        );

        return <div>
            {filmsList}
        </div>
    }
}

FilmsList.propTypes = {
  dictionary: PropTypes.objectOf(PropTypes.string),
  editActionCreator: PropTypes.func,
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
  }))
}

export default FilmsList;
