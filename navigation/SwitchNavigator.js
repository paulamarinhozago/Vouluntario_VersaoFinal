import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createSwitchNavigator({
    Home: {
        screen: TabNavigator
    },
    Auth: {
        screen: AuthNavigator
    }
});

export default createAppContainer(TabNavigator);