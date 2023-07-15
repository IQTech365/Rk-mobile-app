import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {Shadow} from 'react-native-shadow-2';

interface IZoomLinkCardProps {
  link: string;
  onPress: (categoryId: string) => void;
}

const ZoomLinkCard: React.FC<IZoomLinkCardProps> = ({link, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.touchable}
      activeOpacity={0.6}
      onPress={() => {
        // onPress(item._id);
      }}>
      <Shadow style={[styles.container]} distance={5}>
        <Text style={styles.cardContainer}>{link}</Text>
      </Shadow>
    </TouchableOpacity>
  );
};

export default ZoomLinkCard;
