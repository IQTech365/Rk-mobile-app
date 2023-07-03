import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_GRAY, COLOR_ORANGE, COLOR_WHITE } from '../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        width: width,
        paddingVertical: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE
    },
    topContainer: {
        width: width,
        height: 200,
    },
    waveContainer: {
        width: width,
        height: 150,
        backgroundColor: COLOR_BLUE,
        flexDirection: 'row',
    },
    waveView1: {
        width: width * 0.5,
        borderTopLeftRadius: width * 0.4,
        borderTopRightRadius: width * 0.4,
        backgroundColor: COLOR_WHITE,
    },
    waveView2: {
        width: width * 0.5,
        borderTopLeftRadius: width * 0.4,
        borderTopRightRadius: width * 0.4,
        backgroundColor: COLOR_WHITE,
    },
    avatarContainer: {
        position: 'absolute',
        width: width,
        height: 212,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    shadowContainer: {
        width: 100,
        height: 100,
    },
    avatar: {
        position: 'absolute',
        bottom: 0,
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        justifyContent: 'center',

    },
    avatarImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
        // backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        justifyContent: 'center',

    },
    contentContainer: {
        width: width,
        alignItems: 'center',
    },
    usernameText: {
        fontSize: 22,
        color: COLOR_GRAY,
        fontWeight: '500'
    },
    otherText: {
        fontSize: 16,
        color: COLOR_GRAY,
        fontWeight: '300' 
    },
    buttonContainer: {
        width: width,
        alignItems: 'center',
        marginVertical: 20
    },
    editIconContainer: {
        width: width * 0.9,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    }
});

export default styles;