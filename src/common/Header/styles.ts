import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_WHITE } from '../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        flexDirection: 'row',
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: COLOR_BLUE,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    actionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo: {
        width: 54,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR_WHITE,
        borderRadius: 5,
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        justifyContent: 'center'
    },
    spacer: {
        width: 12,
        height: 12,
    }
});

export default styles;