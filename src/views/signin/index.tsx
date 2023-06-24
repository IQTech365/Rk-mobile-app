import React, {useCallback, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import LabelCircle from '../../common/LabelCircle';
import styles from './styles';
import LogoIcon from '../../images/icons/logo.svg';
import UserIcon from '../../images/icons/user2.svg';
import LockIcon from '../../images/icons/lock.svg';

import Button from '../../common/Button';
import Input from '../../common/Input';
import Spacer from '../../common/Spacer';
import { AuthStackRoute } from '../../utils/constants';
import Spinner from '../../common/Spinner';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ISigninRequest } from '../../interface/signin/ISigninRequest';
import { signinRequest } from '../../redux/slices/SigninSlice';

const SignInPageView = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const {requesting, success, error} = useAppSelector(state => state.Signin);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeUsernameText = (text: string) => {
    setUsername(text);
  };

  const onChangePasswordText = (text: string) => {
    setPassword(text);
  };

  const onForgotPasswordPress = useCallback(() => {
    navigation.navigate(AuthStackRoute.ForgotPassword);
  }, []);

  const onLoginPress = useCallback(() => {
    const payload: ISigninRequest = {
      username: username,
      password: password,
    }
    dispatch(signinRequest(payload));
  }, []);

  const onSignUpPress = useCallback(() => {
    navigation.navigate(AuthStackRoute.SignUp);
  }, []);

  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <LabelCircle text="LOGIN" />
        <View style={styles.logo}>
          <LogoIcon width={52} height={35} />
        </View>
        <Input
          icon={<UserIcon width={20} height={20} />}
          placeholder="Username"
          onChangeText={onChangeUsernameText}
          error={'Username required'}
        />
        <Spacer />
        <Input
          icon={<LockIcon width={20} height={20} />}
          placeholder="Password"
          onChangeText={onChangePasswordText}
          error={null}
        />
        <Spacer />
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={onForgotPasswordPress}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <Spacer height={50} />
        <Button text="LOGIN" onPress={onLoginPress} disabled={false} />
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
