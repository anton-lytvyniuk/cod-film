import React, { Component } from 'react'
import { Row, Col, Panel, Button, ButtonGroup, FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

import FilmEditInfo from '../components/FilmEditInfo'

class FilmEdit extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props.film };
    }

    onChangeInfoGenerator = key => ({ target: { value } }) => 
        this.setState({ info: { ...this.state.info, [key]: key === 'year' ? parseInt(value, 10) : value } })

    onChangeDescription = ({ target: { value } }) => this.setState({ description: value })
    
    editButtonClick = () => this.props.editAction(this.state)

    render() {
        const { info, description, img } = this.state;
        const { dictionary, closeAction } = this.props;

        const infoRows = Object.keys(info).map(key => 
            <FilmEditInfo 
                key={key}
                name={dictionary[key]}
                value={info[key]}
                onChange={this.onChangeInfoGenerator(key)}
            />
        );

        return (
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass='h2' className='text-primary'>
                        {info.title}/{info.originTitle}
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
                        <Button bsStyle='danger' onClick={closeAction}>
                            {dictionary.cancel}
                        </Button>
                        <Button bsStyle='success' onClick={this.editButtonClick}>
                            {dictionary.save}
                        </Button>
                    </ButtonGroup>
                </Panel.Body>
            </Panel>
        );
    }
}

FilmEdit.propTypes = {
  dictionary: PropTypes.objectOf(PropTypes.string),
  closeAction: PropTypes.func,
  editAction: PropTypes.func,
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
}

export default FilmEdit;
