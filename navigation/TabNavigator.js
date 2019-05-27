import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import Home from '../screens/Home'
import Search from '../screens/Search'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'
import Post from '../screens/Post'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
    
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({focused, tintColor}) => (
                <Ionicons name='md-calendar' size={32} color={focused ? tintColor = 'mediumorchid' : tintColor = 'gray'} />
                
            ),
        },
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({focused, tintColor}) => (
                <Ionicons name='md-search' size={32} color={focused ? tintColor = 'mediumorchid' : tintColor = 'gray'} />
                
            ),
        },
    },
    Post: {
        screen: Post,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({focused, tintColor}) => (
                <Ionicons name='md-add-circle-outline' size={32} color={focused ? tintColor = 'mediumorchid' : tintColor = 'gray'} />
                
            ),
        },
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({focused, tintColor}) => (
                <Ionicons name='md-heart' size={32} color={focused ? tintColor = 'mediumorchid' : tintColor = 'gray'} />
                
            ),
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: ' ',
            tabBarIcon: ({focused, tintColor}) => (
                <Ionicons name='md-person' size={32} color={focused ? tintColor = 'mediumorchid' : tintColor = 'gray'} />
                
            ),
        },
    },
    
});

export default createAppContainer(TabNavigator);
