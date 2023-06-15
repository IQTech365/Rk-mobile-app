import React, { ReactElement } from "react";
import {View, TextInput, Text} from 'react-native';
import styles from "./styles";

interface InputProps {
    icon: ReactElement,
    placeholder: string,
    error: string | null,
    onChangeText: (text: string) => void,
}

    const Input: React.FC<InputProps> = ({icon, placeholder, onChangeText, error}) => {

    return (
        <>
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        </>
    );
}

export default Input;