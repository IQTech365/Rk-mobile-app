import React from 'react';
import {} from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import Spinner from './common/Spinner';
import {useAuthContext} from './provider/AuthProvider';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import HomeStackNavigator from './navigation/HomeStackNavigator';

const Main = () => {
  const authContext = useAuthContext();
  const {loggedIn, loading, isSubscribed} = authContext;

  if (loading) {
    return <Spinner show={true} backdrop="opaque" />;
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {loggedIn ? <HomeStackNavigator isSubscribed={isSubscribed} /> : <AuthStackNavigator />}
      </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default Main
