import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const SwitchNavigator = createSwitchNavigator({
    Home: {
        screen: TabNavigator
    },
    Auth: {
        screen: AuthNavigator
    },
},
{
    initialRouteName: 'Auth',
}
);

export default createAppContainer(SwitchNavigator);