import React, { Component } from 'react';
import { ButtonGroup, Panel, Button  } from 'react-bootstrap';

import FilmDecription from './FilmDescription';

class FilmsList extends Component {
    render() {
        const { films, dictionary, editActionCreator } = this.props; 
        const filmsList = Object.keys(films).map(key =>
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass='h2' className='text-primary'>
                        {films[key].info.title}/{films[key].info.originTitle}
                    </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <FilmDecription 
                        key={key} 
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

export default FilmsList;
