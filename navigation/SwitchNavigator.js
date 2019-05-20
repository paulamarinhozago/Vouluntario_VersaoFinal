import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import Login from '../screens/Home'
import Signup from '../screens/Search'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createSwitchNavigator({
    Home: {
        screen: Home
    },
});

export default createAppContainer(TabNavigator);