import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Details from '../screens/Details'
import Sources from '../screens/Sources'

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
  Sources: {
    screen: Sources,
  },
})

export default RootStack
