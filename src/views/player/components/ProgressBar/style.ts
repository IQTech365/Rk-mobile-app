import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    timeWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    timeLeft: {
      flex: 1,
      fontSize: 16,
      color: '#FFFFFF',
      paddingLeft: 10,
    },
    timeRight: {
      flex: 1,
      fontSize: 16,
      color: '#FFFFFF',
      textAlign: 'right',
      paddingRight: 10,
    },
  });

  export default styles;