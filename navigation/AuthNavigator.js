import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import Login from '../screens/Login';
import SignupScreen from '../screens/Signup';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Signup: {
        screen: SignupScreen
    }
});

export default createAppContainer(StackNavigator);