import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import LabelCircle from '../../common/LabelCircle';
import styles from './styles';
import LogoIcon from '../../images/icons/logo.svg';
import UserIcon from '../../images/icons/user2.svg';
import LockIcon from '../../images/icons/lock.svg';

import Button from '../../common/Button';
import Input, {INPUT_VALIDATION_TYPE} from '../../common/Input';
import Spacer from '../../common/Spacer';
import {AuthStackRoute} from '../../utils/constants';
import Spinner from '../../common/Spinner';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {ISigninRequest} from '../../interface/signin/ISigninRequest';
import {resetSigin, signinRequest} from '../../redux/slices/SigninSlice';
import {Validator} from '../../utils/validation';
import {setAuthToken, setLoginStatus} from '../../utils/storage';
import {useAuthContext} from '../../provider/AuthProvider';
import Alert, {STATUS_CODE} from '../../common/Alert';
import {useNetInfo} from "@react-native-community/netinfo";
import NoNetworkView from '../../common/NoNetwork';

const SignInPageView = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const authContext = useAuthContext();
  const netInfo = useNetInfo();

  const {setLoggedIn} = authContext;
  const {requesting, success, error, user} = useAppSelector(
    state => state.Signin,
  );
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [siginError, setSigninError] = useState<boolean>(false);

  const onChangeEmailText = (text: string) => {
    setEmail(text);
  };

  const onChangePasswordText = (text: string) => {
    setPassword(text);
  };

  const onForgotPasswordPress = useCallback(() => {
    navigation.navigate(AuthStackRoute.ForgotPassword);
  }, []);

  const onLoginPress = useCallback(() => {
    const payload: ISigninRequest = {
      email: email,
      password: password,
    };
    if(netInfo.isConnected) {
      dispatch(signinRequest(payload));
    }
  }, [email, password]);

  const onSignUpPress = useCallback(() => {
    navigation.navigate(AuthStackRoute.SignUp);
  }, []);

  const _handleSigninSuccess = async () => {
    console.log('token----', user?.token);
    if (user?.code === 404) {
      setSigninError(true);
    } else {
      await setAuthToken(user?.token as string);
      await setLoginStatus('login');
      setLoggedIn(true);
    }
  };

  const handleAlert = () => {
    setSigninError(false);
    dispatch(resetSigin());
  };

  useEffect(() => {
    if (!requesting && success && !error) {
      _handleSigninSuccess();
    }
  }, [success, requesting, error]);

  const disableButton =
    Validator.isEmpty(email) ||
    !Validator.emailRegex(email) ||
    Validator.isEmpty(password);

  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <LabelCircle text="LOGIN" />
        <View style={styles.logo}>
          <LogoIcon width={52} height={35} />
        </View>
        <Input
          icon={<UserIcon width={20} height={20} />}
          placeholder="Email"
          onChangeText={onChangeEmailText}
          required={true}
          validationType={INPUT_VALIDATION_TYPE.EMAIL}
        />
        <Spacer />
        <Input
          icon={<LockIcon width={20} height={20} />}
          placeholder="Password"
          onChangeText={onChangePasswordText}
          required={true}
          validationType={INPUT_VALIDATION_TYPE.TEXT}
          secureTextEntry={true}
        />
        <Spacer />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={onForgotPasswordPress}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={50} />
        <Button text="LOGIN" onPress={onLoginPress} disabled={disableButton} />
        <Spacer height={50} />
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveAccount}>Dont't have an account?</Text>
          <TouchableOpacity onPress={onSignUpPress}>
            <Text style={styles.signup}>SignUp</Text>
          </TouchableOpacity>
        </View>
        <Spinner show={requesting} />
        <Alert
          message={user?.message}
          onPress={handleAlert}
          visible={siginError}
          variant={STATUS_CODE.ERROR}
        />
        <NoNetworkView show={!netInfo.isConnected}/>
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default SignInPageView;
