import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/screens/home';
import detailProd from './src/screens/detailProd';
import Cart from './src/screens/cart';
import Profile from './src/screens/profile';

const MainNavigator = createStackNavigator({
  Home,
  detailProd,
  Cart,
  Profile,
});

const App = createAppContainer(MainNavigator);

export default App;
