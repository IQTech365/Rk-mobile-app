import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface INoDataProps {
  message: string;
}

const NoDataView: React.FC<INoDataProps> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  );
};

export default NoDataView;
