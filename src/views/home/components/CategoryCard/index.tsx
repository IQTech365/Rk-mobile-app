import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';
import {Shadow} from 'react-native-shadow-2';

interface ICategoryCardProps {
  item: any;
  index: number;
  length: number;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({index, item}) => {
  return (
    <TouchableOpacity key={index} style={{marginHorizontal: 10, paddingVertical: 10}} activeOpacity={0.6}>
      <Shadow style={[styles.container]} distance={5}>
        <Text  style={styles.cardContainer}>{item}</Text>
      </Shadow>
    </TouchableOpacity>
  );
};

export default CategoryCard;
