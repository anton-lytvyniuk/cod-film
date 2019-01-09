import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Panel } from 'react-bootstrap';

class List extends Component {
  render() {
    console.log(this.props)
    const { films } = this.props;
    return (
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass='h2' className='text-primary'>
              Welcome!!! Select a film
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ul>
              { Object.keys(films).map(key => (
                <li key={key}>
                  <Link to={`/edit/${key}`}>{`${films[key].info.title}/${films[key].info.originTitle} (${films[key].info.year})`}</Link>
                </li>
              ))}
            </ul>
          </Panel.Body>
        </Panel>
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

export default connect(mapStateToProps, )(List);
