import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import SwitchNavigator from './navigation/SwitchNavigator';
import Signup_2 from './screens/Signup_2'
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

 