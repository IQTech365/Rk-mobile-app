import React from 'react';
import {View, Text} from 'react-native';
import {ICMS} from '../../../interface/cms/ICMS';
import styles from './style';

interface ICMSProps {
  item: ICMS;
  index: number;
}

const CMSItem: React.FC<ICMSProps> = ({item, index}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.pageTitle}</Text>
    </View>
  );
};

export default CMSItem;
