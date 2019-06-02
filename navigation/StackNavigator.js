import React from 'react';
import Login from '../screens/Login'
import HomeScreen from '../screens/Home'
import SearchScreen from '../screens/Search'
import PostScreen from '../screens/Post'
import ActivityScreen from '../screens/Activity'
import ProfileScreen from '../screens/Profile'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export const HomeNavigator = createAppContainer(createStackNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
      	title: 'Eventos'
      }
    }
  }
));

export const SearchNavigator = createAppContainer(createStackNavigator(
  {
    Search: { 
      screen: SearchScreen,
      navigationOptions: {
        title: 'Busca'
      }
    }
  }
));

export const PostNavigator = createAppContainer(createStackNavigator(
  {
    Post: { 
      screen: PostScreen,
      navigationOptions: {
        title: 'Criar Evento'
      }
    }
  }
));

export const ActivityNavigator = createAppContainer(createStackNavigator(
  {
    Activity: { 
      screen: ActivityScreen,
      navigationOptions: {
        title: 'Notificações'
      }
    }
  }
));

export const ProfileNavigator = createAppContainer(createStackNavigator(
  {
    Profile: { 
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Perfil'
      }
    }
  }
));