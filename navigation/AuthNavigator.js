import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import Login from '../screens/Login';
import SignupScreen from '../screens/Signup_2';
import { createStackNavigator, createAppContainer, getActiveChildNavigationOptions } from 'react-navigation';

const StackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: SignupScreen
    }
});

export default createAppContainer(StackNavigator);