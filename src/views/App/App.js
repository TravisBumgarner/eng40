import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loadSession } from '../../store/session/actions/loadSession';

import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';

import Footer from '../../containers/Footer';
import Header from '../../containers/Header';

export class App extends Component {
  static propTypes = {
    loadSession: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadSession();
  }

  render() {
    const { loaded } = this.props;

    return loaded ? (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>

    ) : (
      <div>Loading...</div>
    )
  }
}

export default withRouter(connect((state) => ({
  loaded: state.session.meta.loaded,
}), {
  loadSession,
})(App));
