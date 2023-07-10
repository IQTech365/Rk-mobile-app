import {StyleSheet, Dimensions} from 'react-native';
import {COLOR_GRAY2, COLOR_GRAY3, COLOR_WHITE} from '../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
  listContainer: {
    width: width,
    flexDirection: 'row',
  },
  videoContainer: {
    width: width,
    flexDirection: 'row',
  },
  noDataContainer: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: COLOR_GRAY2,
  }
});

export default styles;
