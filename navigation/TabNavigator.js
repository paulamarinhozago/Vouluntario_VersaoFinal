import React from 'react';
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
            tabBarLabel: ' ',
            tabBarIcon: () => {
                <Image>
                    source={require('../images/home.png')}
                    style={{width=32, height=32}}>
                </Image>
            
            }
        }
  },
  Search: Search,
  Upload: Upload,
  Activity: Activity,
  Profile: Profile
});

export default createAppContainer(TabNavigator);
