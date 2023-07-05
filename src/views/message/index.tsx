import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import ChatInput from '../../common/ChatInput';
import Header2 from '../../common/Header2';
import Spinner from '../../common/Spinner';
import SendMessageIcon from '../../images/icons/send-message.svg';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';

import styles from './style';
import ChatBubble from './ChatBubble';
import { ISendMessage } from '../../interface/message/ISendMessage';
import { fetchMessages, resetSendMessage, sendMessage } from '../../redux/slices/MessageSlice';
import { IMessage } from '../../interface/message/IMessage';

const MessagePageView = (props: any) => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.Signin);
  const {data: messagesData} = useAppSelector(state => state.Message);
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
    const copy = [...currentMessages];
    copy.push(message);
    setCurrentMessages(copy);
    const data: ISendMessage = {userId: user?.data.id as string, message: message};
    dispatch(sendMessage(data));
    setMessage('');
  }

  const displayCurrentMessages = (): Array<Partial<IMessage>> => {
    return currentMessages.map(cm => {
      const item: Partial<IMessage> = {message: cm};
      return item;
    })
  }

  useEffect(() => {
    dispatch(fetchMessages(user?.data.id as string))
  }, []);

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
            data={messagesData?.data || displayCurrentMessages()}
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
            value={message}
          />
        </View>
        <Spinner show={sending || requesting} />
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default MessagePageView;
