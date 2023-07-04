import React, {ReactElement, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {Validator} from '../../utils/validation';
import styles from './styles';

interface InputProps {
  icon: ReactElement;
  placeholder: string;
  onChangeText: (text: string) => void;
  required?: boolean;
  validationType?: INPUT_VALIDATION_TYPE;
  secureTextEntry?: boolean;
}

export enum INPUT_VALIDATION_TYPE {
  TEXT = 'TEXT',
  EMAIL = 'EMAIL',
  MOBILE = 'MOBILE',
  PASSWORD = 'PASSWORD',
}

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  onChangeText,
  required = false,
  validationType,
  secureTextEntry = false,
}) => {
  const [errorText, setErrorText] = useState<string | null>(null);
  const [value, setValue] = useState<string>('');

  const _onChangeText = (text: string) => {
    setValue(text);
    onChangeText(text);
  }

  const _validateOnBlur = () => {
    if (required) {
      switch (validationType) {
        case INPUT_VALIDATION_TYPE.TEXT:
          setErrorText(Validator.validateEmpty(value as string));
          break;
        case INPUT_VALIDATION_TYPE.EMAIL:
          setErrorText(Validator.validateEmail(value as string));
          break;
        case INPUT_VALIDATION_TYPE.MOBILE:
          setErrorText(Validator.validateMobile(value as string));
          break;
        case INPUT_VALIDATION_TYPE.PASSWORD:
          setErrorText(Validator.validatePassword(value as string));
          break;
        default:
          setErrorText(null);
          break;
      }
    } else {
      setErrorText(null);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.iconContainer}>{icon}</View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onChangeText={_onChangeText}
            onBlur={_validateOnBlur}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
      {/* {validationType === INPUT_VALIDATION_TYPE.PASSWORD ? (
        <Text>''</Text>
      ) : null} */}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </>
  );
};

export default Input;
