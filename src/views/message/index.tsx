import React, {useEffect, useState} from 'react';
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
import { fetchProfile } from '../../redux/slices/ProfileSlice';
import { ISendMessage } from '../../interface/message/ISendMessage';
import { resetSendMessage, sendMessage } from '../../redux/slices/MessageSlice';

const MessagePageView = (props: any) => {
  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>('');
  const [currentMessages, setCurrentMessages] = useState<Array<string>>([]);

  const {
    sending,
    sendSuccess,
    sendFailure,
    data,
    requesting,
    success,
    failure,
  } = useAppSelector(state => state.Message);

  const handleChatInputTextChange = (text: string) => {
    setMessage(text);
  };

  const handleSendMessage = () => {
    const data: ISendMessage = {userId: '', message: message};
    dispatch(sendMessage(data));
  }

  useEffect(() => {
    if(!sending && (sendSuccess || sendFailure)){
      dispatch(resetSendMessage());
    }
  }, [sending, sendSuccess, sendFailure]);

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
            onPress={handleSendMessage}
          />
        </View>
        <Spinner show={sending || requesting} />
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default MessagePageView;
