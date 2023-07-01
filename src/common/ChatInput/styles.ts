import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_ERROR, COLOR_GRAY3, COLOR_GRAY4 } from '../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width * 0.95,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLOR_GRAY3,
    },
    iconContainer: {
        width: '10%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        height: 44,
    },
    error: {
        color: COLOR_ERROR,
        fontSize: 12,
        marginLeft: 18,
    }
});

export default styles;