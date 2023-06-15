import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import styles from "./styles";

interface ButtonProps {
    text: string;
    onPress: () => void,
    variant?: 'fill' | 'contain'
}

const Button: React.FC<ButtonProps> = ({text, onPress, variant = 'fill'}) => {
    const buttonStyle = variant === 'contain' ? styles.borderContainer : styles.fillContainer;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;