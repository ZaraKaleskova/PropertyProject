import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Buildings from './containers/Buildings';
import CreateBuilding from './containers/CreateBuilding';
import Nav from './components/Nav';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: '',
    };

    this.notifyPathname = this.notifyPathname.bind(this);
  }

  notifyPathname(pathname) {
    this.setState({
      pathname: pathname,
    });
  }

  render() {
    return (

      <Router>
         <div className="App">
          <Nav 
            notifyPathname={this.notifyPathname}
            pathname={this.state.pathname}
          />
        <Switch>
          <Route path="/"
                 exact
                 component={() => <Buildings />} 
          />
            <Route path="/create"
                 exact
                 component={() => <CreateBuilding />} 
          />
            <Route path="/edit/:id"
                 exact
                 component={() => <CreateBuilding />} 
          />
        </Switch>
          </div>
      </Router>
   
    )
  }
}

export default App;
