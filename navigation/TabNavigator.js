import Home from '../screens/Home'
import Home from '../screens/Search'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Search: Search,
});

export default createAppContainer(TabNavigator);
