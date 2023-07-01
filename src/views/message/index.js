import React from 'react';
import {View, Text} from 'react-native';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import ChatInput from '../../common/ChatInput';
import SendMessageIcon from '../../images/icons/send-message.svg';

import styles from './style';

const MessagePageView = props => {
  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text>Messages go here</Text>
        </View>
        <View style={styles.chatInputContainer}>
          <ChatInput
            icon={<SendMessageIcon width={24} height={24} />}
            placeholder="Write here..."
          />
        </View>
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default MessagePageView;
