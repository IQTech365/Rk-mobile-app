import React, {ReactElement} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ChatInputProps {
  icon: ReactElement;
  placeholder: string;
  onChangeText: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  icon,
  placeholder,
  onChangeText,
}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
        </View>
        <TouchableOpacity style={styles.iconContainer}>{icon}</TouchableOpacity>
      </View>
    </>
  );
};

export default ChatInput;
