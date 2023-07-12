import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_WHITE } from '../../utils/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
    },
    messageContainer: {
        flex: 0.9,
    },
    chatInputContainer: {
        flex: 0.1,
    }
});

export default styles;
