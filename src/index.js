import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchBuildings } from './actions/building.actions';

import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchBuildings());

export const history = createBrowserHistory({ forceRefresh: true });


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
