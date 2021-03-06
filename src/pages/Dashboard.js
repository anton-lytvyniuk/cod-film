import React, { Component } from 'react';
import { ButtonGroup, Panel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmDescription from '../components/FilmDescription';
import { dictionary } from '../constants';

class Dashboard extends Component {
  selectFilm = key => e => {
    e.preventDefault();
    this.props.history.push(`/edit/${key}`);
  }

  render() {
    const { films } = this.props;
    const filmsList = Object.keys(films).map(key =>
      <Panel key={key}>
        <Panel.Heading>
          <Panel.Title componentClass='h2' className='text-primary'>
            {films[key].info.originTitle ? `${films[key].info.title}/${films[key].info.originTitle}` : films[key].info.title}
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <FilmDescription
            film={films[key]}
          />
          <ButtonGroup style={{float: 'right', paddingTop: '15px'}}>
            <Button bsStyle='danger' onClick={this.selectFilm(key)}>{dictionary.edit}</Button>
          </ButtonGroup>
        </Panel.Body>
      </Panel>
    );

    return <div>
      {filmsList}
    </div>
  }
}

Dashboard.propTypes = {
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
};

const mapStateToProps = state => ({
  films: state.films,
});

export default connect(mapStateToProps)(Dashboard);
