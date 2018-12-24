import React, { Component } from 'react';
import { Row, Col, FormControl } from 'react-bootstrap';

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

export default FilmEditInfo