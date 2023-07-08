import React from 'react';
import {Modal, Text, View} from 'react-native';
import Button from '../Button';
import Spacer from '../Spacer';
import styles from './style';

export enum STATUS_CODE {
    SUCCESS = 'success',
    ERROR = 'error',
}

interface IAlertProps {
  variant: STATUS_CODE;
  visible: boolean;
  onPress: () => void;
}

const Alert: React.FC<IAlertProps> = ({
  variant,
  visible,
  onPress,
}) => {
    const titleStyle = variant === 'success' ? styles.titleSuccessContainer : styles.titleErrorContainer;
    const message = variant === STATUS_CODE.SUCCESS ? 'Subscription successful' : 'Error in subscription';
    const title = variant === STATUS_CODE.SUCCESS ? 'Success' : 'Error';
    const buttonText = variant === STATUS_CODE.SUCCESS ? 'OK' : 'CANCEL';
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onPress}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={titleStyle}>
              <Text style={styles.modalText}>{title}</Text>
            </View>
            <Spacer height={20} />
            <Text style={styles.descriptionText}>{message}</Text>
            <Spacer height={20} />
            <Button
              text={buttonText}
              onPress={onPress}
              style={styles.buttonStyle}
              textStyle={styles.buttonText}
            />
            <Spacer height={10} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Alert;
