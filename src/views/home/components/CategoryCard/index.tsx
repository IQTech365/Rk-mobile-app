import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {Shadow} from 'react-native-shadow-2';
import {ICategory} from '../../../../interface/home/ICategoryResponse';

interface ICategoryCardProps {
  item: ICategory;
  index: number;
  onPress: (categoryId: string) => void;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({index, item, onPress}) => {
  return (
    <TouchableOpacity
      key={index}
      style={styles.touchable}
      activeOpacity={0.6}
      onPress={() => {
        onPress(item._id);
      }}>
      <Shadow style={[styles.container]} distance={5}>
        <Text style={styles.cardContainer}>{item.categoryName}</Text>
      </Shadow>
    </TouchableOpacity>
  );
};

export default CategoryCard;
