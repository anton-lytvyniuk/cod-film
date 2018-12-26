import React, { Component } from 'react'
import { Row, Col, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

class FilmEditInfo extends Component {
    render() {
        const { name, value, onChange } = this.props;

        return (
            <Row style={{paddingTop: '5px'}}>
                <Col xs={6} className='text-info'>{name}</Col>
                <Col xs={6}>
                    <FormControl type='text' defaultValue={value} onChange={onChange} />
                </Col>
            </Row>
        );
    }
}

FilmEditInfo.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
}

export default FilmEditInfo
