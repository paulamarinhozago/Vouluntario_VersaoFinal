import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import SwitchNavigator from './navigation/SwitchNavigator';
const middleware = applyMiddleware(thunkMiddleware, logger);
const store = createStore(reducer, middleware);
// console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator/>
      </Provider>
    );
  }
}

 