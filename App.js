import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import SwitchNavigator from './navigation/SwitchNavigator';
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SwitchNavigator/>
      </Provider>
    );
  }
}

 