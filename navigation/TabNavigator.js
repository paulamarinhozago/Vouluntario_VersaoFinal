import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import Home from '../screens/Home'
import Search from '../screens/Search'
import Upload from '../screens/Upload'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: () => {
                <Image
                    source={require('../assets/home.png')}
                    style={{width: 10, height: 10}} />
            }
        },
        tabBarOptions: { 
            showIcon: true 
        }
  },
  Search: Search,
  Upload: Upload,
  Activity: Activity,
  Profile: Profile
});

export default createAppContainer(TabNavigator);
