import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_GRAY, COLOR_GRAY2, COLOR_GRAY3, COLOR_GRAY4 } from '../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        paddingVertical: 12,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    container2: {
        width: width * 0.9,
        paddingVertical: 12,
        alignSelf: 'center',
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLOR_GRAY3,
        backgroundColor: COLOR_GRAY2,
    },
    text: {
        color: COLOR_GRAY4,
        fontSize: 14,
        fontWeight: '500',
    }
});

export default styles;