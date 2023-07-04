import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {Shadow} from 'react-native-shadow-2';
import {COLOR_BLUE, COLOR_WHITE} from '../../../../utils/colors';
import { IBanner } from '../../../../interface/home/IBannerResponse';

interface IBannerCardProps {
  item: IBanner;
  index: number;
  length: number;
}

const BannerCard: React.FC<IBannerCardProps> = ({index, item, length}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10, paddingVertical: 10}} activeOpacity={0.6}>
      <Shadow style={[styles.container]} distance={5}>
        <View key={index} style={styles.cardContainer}>
          <Image source={{uri: item.bannerImageURL}} style={styles.banner} />
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default BannerCard;
