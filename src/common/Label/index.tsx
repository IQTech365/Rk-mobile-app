import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import DoubleRightIcon from '../../images/icons/double-right-arrow.svg';
import CopyIcon from '../../images/icons/copy.svg';

interface ILabelProps {
  text: string;
  showBorder?: boolean;
  showIcon?: boolean;
  onPress?: (value?: any) => void;
  isCopy?: boolean;
  isViewAll?:boolean;
  disabled?:boolean;
}

const Label: React.FC<ILabelProps> = ({
  text,
  showBorder,
  showIcon,
  onPress,
  isCopy,
  isViewAll,
  disabled = false
}) => {
  const style = showBorder ? styles.container2 : styles.container;

  const renderAction = () => {
    if(isCopy) {
      return <CopyIcon width={24} height={24} />;
    } else if(isViewAll) {
      const style = disabled ? styles.viewAllTextDisabled : styles.viewAllText;
      return <Text style={style}>View All</Text>
    }
    return <DoubleRightIcon width={24} height={24} />;
  }
  return (
    <View style={style}>
      <Text style={styles.text}>{text}</Text>
      {showIcon ? (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          {renderAction()}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Label;
