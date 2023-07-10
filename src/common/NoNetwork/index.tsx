import React from "react";
import {View, Text} from 'react-native';
import styles from './style';
import NoInternetIcon from '../../images/icons/without-internet.svg';

interface INoNetworkViewProps {
    show: boolean | null;
}

const NoNetworkView: React.FC<INoNetworkViewProps> = ({show}) => {
    if (!show) return null;
    return (
        <View style={styles.container}>
            <NoInternetIcon width={24} height={24} />
            <Text>No Internet!</Text>
        </View>
    );
}

export default NoNetworkView;