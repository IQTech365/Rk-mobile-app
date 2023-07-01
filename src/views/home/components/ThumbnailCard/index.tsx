import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './style';
import {Shadow} from 'react-native-shadow-2';
import {COLOR_BLUE, COLOR_WHITE} from '../../../../utils/colors';

interface IThumbnailCardProps {
  item: any;
  index: number;
  length: number;
}

const ThumbnailCard: React.FC<IThumbnailCardProps> = ({index, item, length}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10, paddingVertical: 10}} activeOpacity={0.6}>
      <Shadow style={[styles.container]} distance={5}>
        <View key={index} style={styles.cardContainer}></View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default ThumbnailCard;
