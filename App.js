import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <TabNavigator/>
    );
  }
}

 