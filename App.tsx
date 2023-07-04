import React, { useEffect } from 'react';
import {AuthProvider} from './src/provider/AuthProvider';
import Main from './src/main';
import SplashScreen from "react-native-splash-screen";

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
};

export default App;
