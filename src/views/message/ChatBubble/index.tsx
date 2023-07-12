import React from 'react';
import {View, Text} from 'react-native';
import { IMessage } from '../../../interface/message/IMessage';
import styles from './style';

interface IChatBubbleProps {
  item: IMessage | Partial<IMessage>;
  index: number;
}

const ChatBubble: React.FC<IChatBubbleProps> = ({item, index}) => {
    const style = item.postedBy === 'user' ? styles.continer2 : styles.continer;
  return (
    <View key={index} style={style}>
      <Text style={styles.text1}>{item?.message}</Text>
    </View>
  );
};

export default ChatBubble;
