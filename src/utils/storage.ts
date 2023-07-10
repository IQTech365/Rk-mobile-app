import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLoginStatus = async (login: string | '') => {
  try {
    await AsyncStorage.setItem('loginKey', login);
  } catch (error) {
    console.log('AsyncStorage Error in saving login status', error);
  }
};

export const getLoginStatus = async () => {
  try {
    return await AsyncStorage.getItem('loginKey');
  } catch (e) {
    console.log('AsyncStorage Error in fetching login status', e);
  }
};

export const removeLoginStatus = async () => {
  try {
    return await AsyncStorage.removeItem('loginKey');
  } catch (e) {
    console.log('AsyncStorage Error in removing login status', e);
  }
};

export const setAuthToken = async (login: string | '') => {
  try {
    await AsyncStorage.setItem('authToken', login);
  } catch (error) {
    console.log('AsyncStorage Error in saving auth-token', error);
  }
};

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (e) {
    console.log('AsyncStorage Error in fetching auth-token', e);
  }
};

export const removeToken = async () => {
  try {
    return await AsyncStorage.removeItem('authToken');
  } catch (e) {
    console.log('AsyncStorage Error in removing auth-token', e);
  }
};

export const setSubscribed = async (subscribe: string | '') => {
  try {
    await AsyncStorage.setItem('subscribed', subscribe);
  } catch (error) {
    console.log('AsyncStorage Error in saving subscribed', error);
  }
};

export const getSubscribed = async () => {
  try {
    return await AsyncStorage.getItem('subscribed');
  } catch (e) {
    console.log('AsyncStorage Error in fetching subscribed', e);
  }
};

export const removeSubscribed = async () => {
  try {
    return await AsyncStorage.removeItem('subscribed');
  } catch (e) {
    console.log('AsyncStorage Error in removing subscribed', e);
  }
};
