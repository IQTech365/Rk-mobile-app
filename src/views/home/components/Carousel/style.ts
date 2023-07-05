import {StyleSheet, Dimensions} from 'react-native';
import {COLOR_GRAY4, COLOR_ORANGE} from '../../../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  indicatorContainer: {
    width: width,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dotActive: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: COLOR_ORANGE,
    margin: 4,
  },
  dotInactive: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: COLOR_GRAY4,
    margin: 4,
  },
});

export default styles;
