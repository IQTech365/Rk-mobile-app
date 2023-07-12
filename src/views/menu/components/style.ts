import {StyleSheet, Dimensions} from 'react-native';
import {COLOR_GRAY4} from '../../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  text: {
    color: COLOR_GRAY4,
    fontSize: 22,
  },
});

export default styles;
