import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_GRAY, COLOR_ORANGE, COLOR_WHITE } from '../../../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        alignItems: 'center',
    },
    cardContainer: {
        width: width * 0.6,
        height: 140,
        backgroundColor: COLOR_WHITE,
        borderRadius: 8,
    },
    video: {
        width: width * 0.6,
        height: 140,
        borderRadius: 8, 
        resizeMode: 'contain'
    },
    playButtonContainer: {
        position: 'absolute',
        width: width * 0.6,
        height: 140,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default styles;