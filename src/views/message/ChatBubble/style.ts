import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_CHAT1, COLOR_CHAT2, COLOR_GRAY2, COLOR_GRAY3, COLOR_GRAY4, COLOR_WHITE } from '../../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    continer: {
        width: width * 0.88,
        padding: 8,
        borderRadius: 8,
        backgroundColor: COLOR_CHAT1,
        marginVertical: 8,
        marginLeft: 8,
    },
    continer2: {
        width: width * 0.88,
        padding: 8,
        borderRadius: 8,
        backgroundColor: COLOR_CHAT2,
        marginVertical: 8,
        alignSelf: 'flex-end',
        marginRight: 8,
    },
    text1: {
        color: COLOR_WHITE,
    }
});

export default styles;
