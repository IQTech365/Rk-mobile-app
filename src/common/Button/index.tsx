import React from "react";
import {TouchableOpacity, Text} from 'react-native';
import styles from "./styles";

interface ButtonProps {
    text: string;
    onPress: () => void,
    variant?: 'fill' | 'contain',
    disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({text, onPress, variant = 'fill', disabled}) => {
    const buttonStyle = variant === 'contain' ? styles.borderContainer : styles.fillContainer;
    const disableStyle = disabled ? styles.disabled : null;
    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, disableStyle]} disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;