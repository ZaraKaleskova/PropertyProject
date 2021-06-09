import React, { Component } from 'react';
import './App.css';
import Buildings from './containers/Buildings';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="App">
      <Buildings/>
    </div>
    )
  }
}

export default App;
