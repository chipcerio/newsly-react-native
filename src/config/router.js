import { StackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import Details from '../screens/Details'
import Sources from '../screens/Sources'

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: 'Home', header: null },
  },
  Details: {
    screen: Details,
    navigationOptions: { title: 'Details', header: null },
  },
  Sources: {
    screen: Sources,
    navigationOptions: { title: 'Sources', header: null },
  },
})

export default RootStack
