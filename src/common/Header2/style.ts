import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_ORANGE, COLOR_WHITE } from '../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLOR_BLUE
    },
    logo: {
        width: 54,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    title: {
        fontSize: 22,
        color: COLOR_WHITE,
        fontWeight: '500',
    },
   
});

export default styles;