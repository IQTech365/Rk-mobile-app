import React, {ReactElement} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ChatInputProps {
  icon?: ReactElement;
  placeholder?: string;
  onChangeText: (text: string) => void;
  value?: string | null;
  editable?: boolean;
  onPress?: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  icon,
  placeholder,
  onChangeText,
  value,
  editable = true,
  onPress,
}) => {
  const fullWidthStyle = !icon ? {width: '100%'} : {width: '90%'};
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.inputContainer, fullWidthStyle]}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={onChangeText}
            //@ts-ignore
            value={value}
            editable={editable}
          />
        </View>
        {icon ? (
          <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
            {icon}
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};

export default ChatInput;
