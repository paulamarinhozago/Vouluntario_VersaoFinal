import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import Login from '../screens/Login'
import HomeScreen from '../screens/Home'
import SearchScreen from '../screens/Search'
import PostScreen from '../screens/Post'
import ActivityScreen from '../screens/Activity'
import ProfileScreen from '../screens/Profile'
import CameraScreen from '../screens/Camera'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TouchableOpacity, Text} from 'react-native'

export const HomeNavigator = createAppContainer(createStackNavigator(
  {
    Profile: { 
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
    Home: { 
      screen: PostScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Criar Evento',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.navigate('Camera')} >
            <Ionicons style={{marginLeft: 10}} name={'ios-camera'} size={30}/>
          </TouchableOpacity>
        ),
      })
    },
    Camera: { 
      screen: CameraScreen,
      navigationOptions: {
        header: null
      }
    }
  }
));

PostNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.routes.some(route => route.routeName === 'Camera')) {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
  }
}

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
    Home: { 
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Perfil',
        headerRight: (
          <TouchableOpacity onPress={() => console.log('Message')} >
            <Ionicons style={{marginRight: 10}} name={'ios-chatboxes'} size={30}/>
          </TouchableOpacity>
        ),
      })
    },
  }
));

