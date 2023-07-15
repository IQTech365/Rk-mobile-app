import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_GRAY4, COLOR_ORRANGE2, COLOR_WHITE } from '../../../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        alignItems: 'center',
    },
    cardContainer: {
        width: width * 0.9,
        paddingVertical: 10,
        backgroundColor: COLOR_WHITE,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: COLOR_GRAY4,
        fontSize: 16,
    },
    touchable: {
        marginHorizontal: 10, 
        paddingVertical: 10,
    },
});

export default styles;