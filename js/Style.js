import { StyleSheet,  } from 'react-native'

export default StyleSheet.create({
  imageCellsContainer: {
    flexDirection: 'column',
    flex:1,
    justifyContent:'center',
    backgroundColor: 'transparent',
    paddingTop: 20,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 36,
    elevation: 2,
    marginBottom: 20
  },
  cellContainer: {
    flexDirection: 'row',
    paddingBottom: 10
  },
  imageContainer: {
    height: 200,
    flex: 0.8,
    resizeMode: 'cover',
    justifyContent:'flex-end'
  },
  cellTitle: {
    color: 'black',
    fontSize: 29,
    alignSelf: 'center',
    marginBottom: 16
  },
  baseView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#2B2C2C',
    paddingTop: 80,
    paddingRight: 12,
    paddingBottom: 20,
    paddingLeft: 12
  },
  pageBackground: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#2B2C2C'
  }
})
