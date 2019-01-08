import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Edit from './../pages/Edit';
import List from './../pages/List';
import Dashboard from './../pages/Dashboard';

class App extends Component {
  render() {
    const { films } = this.props;
    return (
      <Grid style={{ paddingLeft: '10%', paddingRight: '10%', paddingTop: '15px' }}>
        <Router>
          <Switch>
            <Route exact path='/' component={List} />
            <Route path='/list' component={List} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </Grid>
    );
  }
};

export default App;
