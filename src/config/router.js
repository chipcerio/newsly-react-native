import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/Home';
import DetailsScreen from '../screens/Details';
import SourcesScreen from '../screens/Sources';

const RootStack = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen },
  Sources: { screen: SourcesScreen },
});

export default RootStack;
