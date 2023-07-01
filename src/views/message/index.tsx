import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import ChatInput from '../../common/ChatInput';
import Header2 from '../../common/Header2';
import Spinner from '../../common/Spinner';
import SendMessageIcon from '../../images/icons/send-message.svg';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import mockMessages from '../../mock/mock-messages.json';

import styles from './style';
import ChatBubble from './ChatBubble';

const MessagePageView = (props: any) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>('');
  const [currentMessages, setCurrentMessages] = useState<Array<string>>([]);

  const {
    sending,
    sendSuccess,
    sendFailure,
    messages,
    requesting,
    success,
    failure,
  } = useAppSelector(state => state.Message);

  const handleChatInputTextChange = (text: string) => {
    setMessage(text);
  };

  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Header2 title="Messages" canGoBack={false} />
          <FlatList
            data={mockMessages}
            renderItem={({item, index}) => (
              <ChatBubble item={item} index={index} />
            )}
          />
        </View>
        <View style={styles.chatInputContainer}>
          <ChatInput
            icon={<SendMessageIcon width={24} height={24} />}
            placeholder="Write here..."
            onChangeText={handleChatInputTextChange}
          />
        </View>
        <Spinner show={sending || requesting} />
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default MessagePageView;
