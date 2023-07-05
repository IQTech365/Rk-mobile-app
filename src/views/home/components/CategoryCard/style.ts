import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_ORRANGE2, COLOR_WHITE } from '../../../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 22,
        alignItems: 'center',
    },
    cardContainer: {
        width: width * 0.4,
        paddingVertical: 10,
        backgroundColor: COLOR_BLUE,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: COLOR_WHITE,
        fontSize: 16,
    },
    touchable: {
        marginHorizontal: 10, 
        paddingVertical: 10,
    },
});

export default styles;