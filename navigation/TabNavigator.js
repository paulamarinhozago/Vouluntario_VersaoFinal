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
            tabBarIcon: ({focused}) => (
                <Ionicons name='md-home' size={32} />
            )
        },
  },
  Search: Search,
  Post: Post,
  Activity: Activity,
  Profile: Profile
});

export default createAppContainer(TabNavigator);
