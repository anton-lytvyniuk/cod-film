import React, { Component } from 'react'

export default (url, transformFunc) =>
  WrappedComponent => {
    class Wrapper extends Component {
      constructor(props) {
        super(props);
        this.state = {
          films: {},
          filmEditId: null,
        };
      }

      editActionCreator = key => () => this.setState({ filmEditId: key })

      closeAction = () => this.setState({ filmEditId: null })

      editAction = film => this.setState({
        films: { ...this.state.films, [this.state.filmEditId]: film },
        filmEditId: null,
      })

      componentDidMount() {
        fetch(url)
          .then(response => response.json())
          .then(films => this.setState({ films: transformFunc ? transformFunc(films) : films }))
      }

      render() {
        return (
          <WrappedComponent 
            {...this.props} 
            films={this.state.films} 
            filmEditId={this.state.filmEditId}
            closeAction={this.closeAction}
            editAction={this.editAction} 
            editActionCreator={this.editActionCreator}
          />
        );
      }
    };

    return Wrapper;
  }
