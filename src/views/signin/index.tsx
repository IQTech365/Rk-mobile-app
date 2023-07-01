import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import LabelCircle from '../../common/LabelCircle';
import styles from './styles';
import LogoIcon from '../../images/icons/logo.svg';
import UserIcon from '../../images/icons/user2.svg';
import LockIcon from '../../images/icons/lock.svg';

import Button from '../../common/Button';
import Input, { INPUT_VALIDATION_TYPE } from '../../common/Input';
import Spacer from '../../common/Spacer';
import { AuthStackRoute } from '../../utils/constants';
import Spinner from '../../common/Spinner';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ISigninRequest } from '../../interface/signin/ISigninRequest';
import { signinRequest } from '../../redux/slices/SigninSlice';
import { Validator } from '../../utils/validation';
import { setAuthToken, setLoginStatus } from '../../utils/storage';
import { useAuthContext } from '../../provider/AuthProvider';

const SignInPageView = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const authContext = useAuthContext();
  const {setLoggedIn} = authContext;
  const {requesting, success, error, user} = useAppSelector(state => state.Signin);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
    }
    dispatch(signinRequest(payload));
  }, [email, password]);

  const onSignUpPress = useCallback(() => {
    navigation.navigate(AuthStackRoute.SignUp);
  }, []);

  const _handleSigninSuccess = async () => {
    setAuthToken(user?.token as string); //TODO: save authToken received after singin success from api
    await setLoginStatus('login');
    setLoggedIn(true);
  }

  useEffect(() => {
    if(!requesting && success && !error) {
      _handleSigninSuccess();
    }
  }, [success, requesting, error]);

  const disableButton = Validator.isEmpty(email) || !Validator.emailRegex(email) || Validator.isEmpty(password);

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
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default SignInPageView;
