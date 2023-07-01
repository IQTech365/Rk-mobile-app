import React from "react";
import {View, Text, SafeAreaView} from 'react-native';
import Header2 from "../../common/Header2";
import Label from "../../common/Label";
import Spacer from "../../common/Spacer";
import styles from "./style";

const MenuPageView = (props) => {

    return (
        <View style={styles.container}>
            <Header2 title="Menu" canGoBack={false} />
            <Spacer height={8} />
            <Label showBorder={true} text="About Us" showIcon={true} />
            <Spacer height={8} />
            <Label showBorder={true} text="Our Vision" showIcon={true} />
            <Spacer height={8} />
            <Label showBorder={true} text="Our Mission" showIcon={true} />
        </View>
    );
}

export default MenuPageView;