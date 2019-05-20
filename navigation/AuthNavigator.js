import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    }
});

export default createAppContainer(StackNavigator);