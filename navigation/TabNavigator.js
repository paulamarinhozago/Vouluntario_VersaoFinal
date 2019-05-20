import Home from '../screens/Home'
import Search from '../screens/Search'
import Upload from '../screens/Upload'
import Activity from '../screens/Activity'
import Profile from '../screens/Profile'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '',
      tabBarIcon: () => {
          <Ionicons name = 'ios-home' size={32} />
      }
    }
  },
  Search: Search,
  Upload: Upload,
  Activity: Activity,
  Profile: Profile
});

export default createAppContainer(TabNavigator);
