import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_GRAY, COLOR_ORANGE, COLOR_WHITE } from '../../../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        alignItems: 'center',
    },
    cardContainer: {
        width: width * 0.8,
        height: 140,
        backgroundColor: COLOR_WHITE,
        borderRadius: 8,
    },
});

export default styles;