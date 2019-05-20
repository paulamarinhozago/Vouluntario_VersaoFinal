import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import reducer from './reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <TabNavigator/>
      </Provider>
    );
  }
}

 