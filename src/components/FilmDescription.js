import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class FilmDescription extends Component {
    render() {
        const { 
            film: { 
                info, 
                description, 
                img,
            },
            dictionary,
        } = this.props;

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
}

export default FilmDescription;
