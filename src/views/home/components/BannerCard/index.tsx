import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {IBanner} from '../../../../interface/home/IBannerResponse';

interface IBannerCardProps {
  item: IBanner;
  index: number;
}

const BannerCard: React.FC<IBannerCardProps> = ({index, item}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6}>
        <View key={index} style={styles.cardContainer}>
          <Image source={{uri: item.bannerImageURL}} style={styles.banner} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BannerCard;
