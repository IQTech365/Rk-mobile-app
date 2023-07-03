import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import {getLoginStatus} from '../utils/storage';

interface Auth {
  loggedIn: boolean;
  setLoggedIn: (status: boolean) => void;
  loading: boolean;
}

const AuthContext = createContext<Auth>({
  loggedIn: false,
  setLoggedIn: () => {},
  loading: false,
});

export const AuthProvider: React.FC<{children: ReactElement}> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchLoginStatus = async () => {
    setLoading(true);
    const loginStatus = await getLoginStatus();
    console.log('loginStatus----', loginStatus);
    
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
    <AuthContext.Provider value={{loggedIn, setLoggedIn, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
