import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {getLoginStatus, getSubscribed} from '../utils/storage';

interface Auth {
  loggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
  loading: boolean;
  isSubscribed: boolean;
  setIsSubscribed: (subscribe: boolean) => void;
}

const AuthContext = createContext<Auth>({
  loggedIn: false,
  setLoggedIn: () => {},
  loading: false,
  isSubscribed: false,
  setIsSubscribed: () => {},
});

export const AuthProvider: React.FC<{children: ReactElement}> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  const fetchLoginStatus = async () => {
    setLoading(true);
    const loginStatus = await getLoginStatus();
    const subscriptionStatus = await getSubscribed();
    
    if(subscriptionStatus && subscriptionStatus === 'subscribe') {
      setIsSubscribed(true);
    } else {
      setIsSubscribed(false);
    }

    if (loginStatus && loginStatus === 'login') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      // setLoggedIn(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLoginStatus();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetchLoginStatus();
    }
  }, [loggedIn]);

  return (
    <AuthContext.Provider value={{loggedIn, setLoggedIn, loading, isSubscribed, setIsSubscribed}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
