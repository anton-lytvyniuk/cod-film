import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { dictionary } from '../constants';

class FilmDescription extends Component {
    render() {
      console.log(this.props)
        const { info, description, img } = this.props.film;

        const infoRows = Object.keys(info).map(key => (
            <Row key={key} style={{paddingTop: '5px'}}>
                <Col xs={6} className='text-info'>{dictionary[key]}</Col>
                <Col xs={6}>{info[key]}</Col>
            </Row>
        ));

        return (
            <div>
                <Row>
                    <Col xs={4}>
                        <img src={img} />
                    </Col>
                    <Col xs={8}>
                        {infoRows}
                    </Col>
                </Row>
                <h3 className='text-primary'>{dictionary.description}</h3>
                <p className='text-secondary'>{description}</p>
            </div>
        );
    }
};

FilmDescription.propTypes = {
  dictionary: PropTypes.objectOf(PropTypes.string),
  film: PropTypes.shape({
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
  })
};

export default FilmDescription;
