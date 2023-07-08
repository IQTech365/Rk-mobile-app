import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;