import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_WHITE } from '../../../../utils/colors';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        borderRadius: 22,
        alignItems: 'center',
    },
    cardContainer: {
        width: width * 0.4,
        paddingVertical: 10,
        backgroundColor: COLOR_WHITE,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
});

export default styles;