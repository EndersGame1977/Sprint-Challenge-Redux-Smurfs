import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchSmurfs, addSmurf } from '../actions/index';

import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 [X] Just remember, `how do I `connect` my components to redux?`
 [X] `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }
  
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  
  render() {
    return (
      <div className="App container">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm addSmurf={this.props.addSmurf}/>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
};

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App)
