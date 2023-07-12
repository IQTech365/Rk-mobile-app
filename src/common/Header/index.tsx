import React from "react";
import {View, TouchableOpacity} from 'react-native';
import LogoIcon from '../../images/icons/logo.svg';
import SearchIcon from '../../images/icons/search.svg';
import NotificationIcon from '../../images/icons/notification.svg';
import styles from "./styles";

const Header = (props:any) => {
    const {onSearchPress, onNotificationPress} = props || {};

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <LogoIcon width={52} height={35} />
            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity style={styles.icon} onPress={onSearchPress}>
                    <SearchIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;