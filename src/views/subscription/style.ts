import {StyleSheet, Dimensions} from 'react-native';
import { COLOR_BLUE, COLOR_GRAY, COLOR_GRAY3, COLOR_GRAY4, COLOR_WHITE } from '../../utils/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    cardContainer: {
        width: width * 0.8,
        borderRadius: 16,
        alignSelf: 'center',
        backgroundColor: COLOR_GRAY3,
    },
    topContainer: {
        width: width * 0.8,
        height: 200,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    avatarContainer: {
        // position: 'absolute',
        width: '100%',
        // height: 212,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
        marginTop: -50
    },
    avatar: {
        // position: 'absolute',
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
        width: '100%',
        backgroundColor: COLOR_WHITE,
        height: 300,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        padding: 16,
        paddingTop: 40,
        marginTop: -30,
        zIndex: -999
    },
    buttonContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center'
    },
    buttonStyle: {
        width: '75%',
        borderRadius: 25,
        backgroundColor: COLOR_WHITE,
        borderWidth: 1,
        borderColor: COLOR_BLUE,
    },
    buttonText: {
        color: COLOR_GRAY4,
        fontSize: 14,
        fontWeight: '600',
    },
    featureText: {
        color: COLOR_GRAY4,
        fontSize: 16,
        marginVertical: 4
    },
    priceText: {
        color: COLOR_GRAY4,
        fontSize: 18,
        marginVertical: 4,
        fontWeight: 'bold'
    },
    planContainer: {
        width: '100%',
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    planText: {
        color: COLOR_WHITE,
        fontSize: 24,
        fontWeight: 'bold'
    },
    planDurationText: {
        color: COLOR_WHITE,
        fontSize: 14,
    },
    skipContainer: {
        width: width,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    skipButton: {
        width: '25%',
        borderRadius: 25,
        backgroundColor: COLOR_WHITE,
    }
});

export default styles;