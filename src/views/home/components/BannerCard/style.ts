import {StyleSheet, Dimensions} from 'react-native';
import {COLOR_GRAY3, COLOR_GRAY4, COLOR_ORANGE, COLOR_WHITE} from '../../../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
    },
  cardContainer: {
    width: width,
    height: height / 4,
    backgroundColor: COLOR_WHITE,
  },
  banner: {
    // width: width,
    // height: height / 4,
    // resizeMode: 'cover',
    // aspectRatio: width / 0.1
    // aspectRatio: 1/0.5
    // height: 'auto',
    // aspectRatio: 16 / 8.2,
    // resizeMode: 'contain'
    flex: 1,
    // resizeMode: 'contain'
  },
});

export default styles;
