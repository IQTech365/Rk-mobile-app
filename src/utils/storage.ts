import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLoginStatus = async (login: string | '') => {
  try {
    await AsyncStorage.setItem('login-key', login);
  } catch (error) {
    console.log('AsyncStorage Error in saving login status', error);
  }
};

export const getLoginStatus = async () => {
  try {
    return await AsyncStorage.getItem('login-key');
  } catch (e) {
    console.log('AsyncStorage Error in fetching login status', e);
  }
};

export const setAuthToken = async (login: string | '') => {
  try {
    await AsyncStorage.setItem('auth-token', login);
  } catch (error) {
    console.log('AsyncStorage Error in saving auth-token', error);
  }
};

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem('auth-token');
  } catch (e) {
    console.log('AsyncStorage Error in fetching auth-token', e);
  }
};
