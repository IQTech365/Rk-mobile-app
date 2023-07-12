import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_CHAT1, COLOR_CHAT2, COLOR_WHITE } from '../../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    continer: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: COLOR_CHAT1,
        marginVertical: 8,
        marginHorizontal: 8,
        alignSelf: 'flex-start',
    },
    continer2: {
        padding: 8,
        borderRadius: 8,
        backgroundColor: COLOR_CHAT2,
        marginVertical: 8,
        alignSelf: 'flex-end',
        marginHorizontal: 8,
    },
    text1: {
        color: COLOR_WHITE,
    }
});

export default styles;
