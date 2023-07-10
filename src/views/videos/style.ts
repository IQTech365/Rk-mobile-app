import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_WHITE } from '../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE
    },
    videoCard: {
        width: width * 0.9,
        height: 160,
        alignSelf: 'center'
    },
    tumbnail: {
        width: width * 0.9,
        height: 160,
    },
    playButtonStyle: {
        width: width * 0.9,
        height: 160,
    }
});

export default styles;