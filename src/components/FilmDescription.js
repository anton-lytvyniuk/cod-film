import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const state = {
    img: 'http://baskino.me/uploads/images/2012/381/eulx363.jpg'
    , info: { 
        title: { text: 'Зеленая миля', title: 'Title' }
        , originTitle: { text: 'The Green Mile', title: 'Origin title' }
        , year: { text: 1999, title: 'Year' }
        , country: { text: 'USA', title: 'Country' }
    }
    , description: 'Сюжет фильма «Зеленая миля»: в 1935 году в отделение федеральной тюрьмы «Холодная гора» поступил афроамериканец невероятных размеров, по имени Джон. Он был приговорен посмертно за изнасилование и убийство двух девочек. Джон был очень спокоен и зная, что он не совершал данное преступление был готов пройтись по зеленой миле. Так назывался коридор зеленого цвета, по которому осужденные отправлялись в последний путь на казнь на электрическом стуле...'
}

class FilmDescription extends Component {
    constructor(props) {
        super(props);
        this.state = state;
    }

    render() {
        const { info: { title: { text: title }, originTitle: { text: originTitle } }, info, description, img } = this.state;
        const infoRows = Object.keys(info).map(key => (
            <Row>
                <Col xs={6} className='text-info'>{info[key].title}</Col>
                <Col xs={6}>{info[key].text}</Col>
            </Row>
        ));

        return (
            <Grid>
                <h2 className='text-primary'>{title}/{originTitle}</h2>
                <Row>
                    <Col xs={4}>
                        <img src={img} />
                    </Col>
                    <Col xs={8}>
                        {infoRows}
                    </Col>
                </Row>
                <h3 className='text-primary'>Description</h3>
                <p className='text-secondary'>{description}</p>
            </Grid>
        );
    }
}

export default FilmDescription;
