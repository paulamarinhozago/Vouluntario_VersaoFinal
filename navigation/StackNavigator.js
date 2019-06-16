import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import Login from '../screens/Login'
import HomeScreen from '../screens/Home'
import SearchScreen from '../screens/Search'
import PostScreen from '../screens/Post'
import ActivityScreen from '../screens/Activity'
import ProfileScreen from '../screens/Profile'
import CameraScreen from '../screens/Camera'
import MapScreen from '../screens/Map'
import EditScreen from '../screens/Edit'
import CommentScreen from '../screens/Comment'
import ChatScreen from '../screens/Chat'
import MessagesScreen from '../screens/Messages'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { TouchableOpacity, Text} from 'react-native'

export const HomeNavigator = createAppContainer(createStackNavigator(
  {
    Home: { 
      screen: HomeScreen,
      navigationOptions: {
        title: 'Eventos'
      }
    },
    Comment: {
      screen: CommentScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Comentários',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons style={styles.icon} name={'ios-arrow-back'} size={30}/>
          </TouchableOpacity>
        )
      })
    },
  }
));

HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.routes.some(route => route.routeName === 'Comment')) {
    tabBarVisible = false
  }
  return {
    tabBarVisible,
  }
}

export const SearchNavigator = createAppContainer(createStackNavigator(
  {
    Search: { 
      screen: SearchScreen,
      navigationOptions: {
        header: null
      }
    },
    Profile: { 
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Perfil',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons style={styles.icon} name={'ios-arrow-back'} size={30}/>
          </TouchableOpacity>
        )
      })
    },
  }
));

export const PostNavigator = createAppContainer(createStackNavigator(
  {
    Post: { 
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
    Map: {
      screen: MapScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Mapa',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons style={styles.icon} name={'ios-arrow-back'} size={30}/>
          </TouchableOpacity>
        )
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
  if (navigation.state.routes.some(route => route.routeName === 'Map')) {
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
    MyProfile: { 
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Perfil',
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('Messages')} >
            <Ionicons style={{marginRight: 10}} name={'ios-chatboxes'} size={30}/>
          </TouchableOpacity>
        ),
      })
    },
    Edit: {
      screen: EditScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Edit Profile',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons style={styles.icon} name={'ios-arrow-back'} size={30}/>
          </TouchableOpacity>
        )
      })
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Chat',
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Ionicons style={styles.icon} name={'ios-arrow-back'} size={30}/>
          </TouchableOpacity>
        )
      })
    }
  }
));

