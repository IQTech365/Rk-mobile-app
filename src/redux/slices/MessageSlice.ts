import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IMessageResponse } from '../../interface/message/IMessageResponse';
import {ISendMessage} from '../../interface/message/ISendMessage';

interface IMessageState {
  data: IMessageResponse | null;
  requesting: boolean;
  success: boolean;
  failure: boolean;
  error: any;
  sending: boolean;
  sendSuccess: boolean;
  sendFailure: boolean;
}

const initialState: IMessageState = {
  data: null,
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
    fetchMessagesSuccess: (state, action: PayloadAction<IMessageResponse>) => {
      state.requesting = false;
      state.success = true;
      state.data = action.payload;
    },
    fetchMessagesFailure: (state, action: PayloadAction<any>) => {
      state.requesting = false;
      state.success = false;
      state.failure = true;
      state.error = action.payload;
    },
    resetSendMessage: (state) => {
      state.sending = false;
      state.sendSuccess = false;
      state.sendFailure = false;
    }
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
  resetSendMessage,
} = MessageSlice.actions;
