import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  startingView: {
    marginBottom: Dimensions.get('window').height / 30,
    // marginTop: 10,
  },
  endingView: {
    marginTop: Dimensions.get('window').height / 30,
    // marginBottom: 10,
  },
  viewFlex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  image: {
    top: 20,
    borderWidth:1,
    borderColor:'#c0c0c0',
    // alignItems:'center',
    // justifyContent:'center',
    width: 120,
    height:180,
    backgroundColor:'white',
    borderRadius: 54,
    resizeMode: 'contain'
  },
  start_name: {
    bottom: 30,
    fontFamily: 'Montserrat Subrayada',
    fontSize: 25,
    textAlign: 'center',
  },
  end_name: {
    top: 30,
    fontFamily: 'Montserrat Subrayada',
    fontSize: 25,
    textAlign: 'center',
  },
  pulse_image: {
    bottom: 20,
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 120,
    height:180,
    backgroundColor:'white',
    borderRadius: 54,
    resizeMode: 'contain'
  },
  mid_path_text: {
    textAlign: 'center',
    fontFamily: 'Zilla Slab Highlight',
    fontSize: 20,
  },
  top_path_text: {
    flex: .2,
    bottom: 35,
    textAlign: 'center',
    fontFamily: 'Zilla Slab Highlight',
    fontSize: 20,
  },
  loadingView: {
    marginTop: Dimensions.get('window').height / 1.03
  },
  loadingText: {
    fontFamily: 'Faster One'
  }
})
