import { StackNavigator } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import CartScreen from '../cart/CartScreen';
import InitialRouter from './InitialRouter';
import ProductListScreen from '../product/ProductListScreen';
export default StackNavigator({

  HomeScreen: { screen: HomeScreen },
  CartScreen: { screen: CartScreen},
    ProductListScreen: { screen: ProductListScreen},
  InitialRouter: { screen: InitialRouter },
}, {
  initialRouteName: 'InitialRouter',
  headerMode: 'none',
  navigationOptions: { gesturesEnabled: false },
});
