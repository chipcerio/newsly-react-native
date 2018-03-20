import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  rootViewStyle: {
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 6,
    backgroundColor: '#fcfcfc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  imageViewStyle: {
    height: 128,
    width: 96,
  },
  textViewStyle: {
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 16,
    flex: 1,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginRight: 16,
  },
  dateStyle: {
    color: 'grey',
    marginTop: 8,
  },
})
