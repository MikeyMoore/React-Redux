import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import './index.css';

const createStoreWithMiddleware = applyMiddleWare(thunk)(createStore)

const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
