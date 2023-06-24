import React from 'react';
import {View} from 'react-native';
import styles from './style';
import Lottie from 'lottie-react-native';
const spinner = require('../../images/loader.json');

interface ISpinnerProps {
    show: boolean;
    backdrop?: 'transparent' | 'opaque';
}

const Spinner: React.FC<ISpinnerProps> = ({backdrop = 'transparent', show = false}) => {
  const backdropStyle = backdrop === 'transparent' ? styles.transparent : styles.opaque;
  if(!show) return null;
  return (
    <View style={[styles.container, backdropStyle]}>
      <Lottie source={spinner} autoPlay loop style={{width: 50, height: 50}} />
    </View>
  );
};

export default Spinner;