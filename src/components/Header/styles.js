import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  containerStyle: {
    backgroundColor: '#3F51B5',
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 16,
  },
  imgStyle: {
    marginTop: 16,
  },
})
