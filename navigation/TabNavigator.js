import Home from '../screens/Home'
import Search from '../screens/Search'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Search: Search,
});

export default createAppContainer(TabNavigator);
