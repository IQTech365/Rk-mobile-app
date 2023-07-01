import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

interface IChatBubbleProps {
  item: any;
  index: number;
}

const ChatBubble: React.FC<IChatBubbleProps> = ({item, index}) => {
    const style = item.posted_by === 'user' ? styles.continer2 : styles.continer;
  return (
    <View key={index} style={style}>
      <Text style={styles.text1}>{item?.message}</Text>
    </View>
  );
};

export default ChatBubble;
