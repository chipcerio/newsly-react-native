import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Details from '../screens/Details'

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
})

export default RootStack
