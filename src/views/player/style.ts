import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ebebeb',
    },
    video: {
      height: Dimensions.get('window').width * (9 / 16),
      width: Dimensions.get('window').width,
      backgroundColor: 'black',
    },
    fullscreenVideo: {
      height: Dimensions.get('window').width,
      width: Dimensions.get('window').height,
      backgroundColor: 'black',
    },
    text: {
      marginTop: 30,
      marginHorizontal: 20,
      fontSize: 15,
      textAlign: 'justify',
    },
    fullscreenButton: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
      paddingRight: 10,
    },
    controlOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#000000c4',
      justifyContent: 'space-between',
    },
  });

export default styles;
