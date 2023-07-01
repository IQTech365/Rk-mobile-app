import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMessage} from '../../interface/message/IMessage';
import {ISendMessage} from '../../interface/message/ISendMessage';

interface IMessageState {
  messages: Array<IMessage> | [];
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
  sending: boolean;
  sendSuccess: boolean;
  sendFailure: boolean;
}

const initialState: IMessageState = {
  messages: [],
  requesting: false,
  success: false,
  failure: false,
  error: null,
  sending: false,
  sendSuccess: false,
  sendFailure: false,
};

export const MessageSlice = createSlice({
  name: 'MessageSlice',
  initialState: initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<ISendMessage>) => {
      state.sending = true;
    },
    sendMessageSuccess: (state, action: PayloadAction) => {
      state.sending = false;
      state.sendSuccess = true;
      state.sendFailure = false;
    },
    sendMessageFailure: (state, action: PayloadAction<any>) => {
      state.sending = false;
      state.sendSuccess = false;
      state.sendFailure = true;
    },
    fetchMessages: (state, action: PayloadAction<string>) => {
      state.requesting = true;
    },
    fetchMessagesSuccess: (state, action: PayloadAction<Array<IMessage>>) => {
      state.requesting = false;
      state.success = true;
      state.messages = action.payload;
    },
    fetchMessagesFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
  },
});

export default MessageSlice.reducer;

export const {
  sendMessage,
  sendMessageSuccess,
  sendMessageFailure,
  fetchMessages,
  fetchMessagesSuccess,
  fetchMessagesFailure,
} = MessageSlice.actions;
