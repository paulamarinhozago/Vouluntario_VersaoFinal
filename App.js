import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import reducer from './reducer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <TabNavigator/>
      </Provider>
    );
  }
}

 