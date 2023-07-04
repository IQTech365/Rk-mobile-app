import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    wrapper: {
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flex: 3,
    },
    touchable: {
      padding: 5,
    },
    touchableDisabled: {
      opacity: 0.3,
    },
  });

  export default styles;