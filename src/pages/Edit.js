import React, { Component } from 'react';
import { Row, Col, Panel, Button, ButtonGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { dictionary } from '../constants';
import FilmEditInfo from '../components/FilmEditInfo';
import { selectFilm, changeInfo, changeDescription, saveFilm } from './../actions';

class Edit extends Component {
  onChangeInfo = key => ({ target: { value } }) => this.props.changeInfo(key, value);

  onChangeDescription = ({ target: { value } }) => this.props.changeDescription(value);

  saveButtonClick = e => {
    e.preventDefault();
    this.props.saveFilm(this.props.match.params.id, this.props.film);
    this.props.history.push('/dashboard');
  }

  closeButtonOnClick = e => {
    const { history, selectFilm } = this.props;

    e.preventDefault();
    history.goBack();
  }

  componentDidMount() {
    const { match: { params: { id } }, selectFilm, films } = this.props;
    selectFilm(films[id]);
  }

  render() {
    const { info, description, img } = this.props.film;

    if (!info) return null;

    const infoRows = Object.keys(info || {}).map(key =>
        <FilmEditInfo
            key={key}
            name={dictionary[key]}
            value={info[key]}
            onChange={this.onChangeInfo(key)}
        />
    );

    return (
        <Panel>
            <Panel.Heading>
                <Panel.Title componentClass='h2' className='text-primary'>
                  {info.originTitle ? `${info.title}/${info.originTitle}` : info.title}
                </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <Row>
                    <Col xs={4}>
                        <img src={img} />
                    </Col>
                    <Col xs={8}>
                        {infoRows}
                    </Col>
                </Row>
                <h3 className='text-primary'>{dictionary.description}</h3>
                <FormControl
                    componentClass='textarea'
                    defaultValue={description}
                    style={{width: '100%', minHeight: '100px'}}
                    onChange={this.onChangeDescription}
                />
                <ButtonGroup style={{float: 'right', paddingTop: '15px'}}>
                    <Button bsStyle='danger' onClick={this.closeButtonOnClick}>
                        {dictionary.cancel}
                    </Button>
                    <Button bsStyle='success' onClick={this.saveButtonClick}>
                        {dictionary.save}
                    </Button>
                </ButtonGroup>
            </Panel.Body>
        </Panel>
    );
  }
}

Edit.propTypes = {
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

const mapStateToProps = state => ({
  film: state.activeFilm,
  films: state.films,
});

const mapActionToProps = dispatch => ({
  selectFilm: film => dispatch(selectFilm(film)),
  changeInfo: (key, value) => dispatch(changeInfo(key, value)),
  changeDescription: value => dispatch(changeDescription(value)),
  saveFilm: (id, film) => dispatch(saveFilm(id, film)),
});

export default connect(mapStateToProps, mapActionToProps)(Edit);
