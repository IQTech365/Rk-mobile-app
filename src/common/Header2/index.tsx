import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './style';
import ArrowLeftIcon from '../../images/icons/arrow-left.svg';
import Spacer from '../Spacer';

interface IHeader2Props {
  canGoBack: boolean;
  title: string;
}

const Header2: React.FC<IHeader2Props> = ({canGoBack = true, title}) => {
  return (
    <View style={styles.container}>
      {canGoBack ? <TouchableOpacity style={styles.logo}>
        <ArrowLeftIcon width={24} height={24} />
      </TouchableOpacity> : <Spacer width={54} height={38} />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header2;
