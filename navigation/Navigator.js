import { StackNavigator } from 'react-navigation';
import HomeScreen from '../home/HomeScreen';
import CartScreen from '../cart/CartScreen';
import InitialRouter from './InitialRouter';
import ProductListScreen from '../product/ProductListScreen';
import ProductDetailScreen from '../product/ProductDetailScreen';
import TagsTestScreen from '../tags/TagsTestScreen';
import CatalogItemsTestScreen from '../product/CatalogItemsTestScreen';

export default StackNavigator({

  HomeScreen: { screen: HomeScreen },
  CartScreen: { screen: CartScreen },
  ProductListScreen: { screen: ProductListScreen },
  ProductDetailScreen: { screen: ProductDetailScreen },
  InitialRouter: { screen: InitialRouter },
  TagsTestScreen: { screen: TagsTestScreen },
  CatalogItemsTestScreen: { screen: CatalogItemsTestScreen},
}, {
  initialRouteName: 'InitialRouter',
  headerMode: 'none',
  navigationOptions: { gesturesEnabled: false },
});
