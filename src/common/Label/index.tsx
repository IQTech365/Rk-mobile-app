import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import DoubleRightIcon from '../../images/icons/double-right-arrow.svg';
import CopyIcon from '../../images/icons/copy.svg';

interface ILabelProps {
  text: string;
  showBorder?: boolean;
  showIcon?: boolean;
  onPress?: () => void;
  isCopy?: boolean;
}

const Label: React.FC<ILabelProps> = ({
  text,
  showBorder,
  showIcon,
  onPress,
  isCopy,
}) => {
  const style = showBorder ? styles.container2 : styles.container;
  return (
    <View style={style}>
      <Text style={styles.text}>{text}</Text>
      {showIcon ? (
        <TouchableOpacity onPress={onPress}>
          {isCopy ? <CopyIcon width={24} height={24} /> : <DoubleRightIcon width={24} height={24} />}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Label;
