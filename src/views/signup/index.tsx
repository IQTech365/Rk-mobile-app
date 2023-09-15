import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import LabelCircle from '../../common/LabelCircle';
import styles from './styles';
import LogoIcon from '../../images/icons/logo.svg';
import UserIcon from '../../images/icons/user2.svg';
import LockIcon from '../../images/icons/lock.svg';
import EmailIcon from '../../images/icons/email.svg';
import MobileIcon from '../../images/icons/mobile.svg';

import Button from '../../common/Button';
import Input, { INPUT_VALIDATION_TYPE } from '../../common/Input';
import Spacer from '../../common/Spacer';
import { AuthStackRoute } from '../../utils/constants';
import Spinner from '../../common/Spinner';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ISignupRequest } from '../../interface/signup/ISignupRequest';
import { signupRequest } from '../../redux/slices/SignupSlice';
import { Validator } from '../../utils/validation';
import { useNetInfo } from '@react-native-community/netinfo';
import NoNetworkView from '../../common/NoNetwork';

const SignUpPageView = (props: any) => {
  const { navigation } = props;
  const dispatch = useAppDispatch();
  const { success, error, requesting } = useAppSelector(state => state.Signup);

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const netInfo = useNetInfo();

  const onChangeUsernameText = (text: string) => {
    setUsername(text);
  };

  const onChangeEmailText = (text: string) => {
    setEmail(text);
  };

  const onChangePasswordText = (text: string) => {
    setPassword(text);
  };

  const onChangeMobileText = (text: string) => {
    setMobile(text);
  };

  const onSignUpPress = useCallback(() => {
    const payload: ISignupRequest = {
      username: username,
      password: password,
      email: email,
      mobile: mobile,
    };
    if (netInfo.isConnected) {
      dispatch(signupRequest(payload));
    }
  }, [username, email, password, mobile]);

  const onSignInPress = useCallback(() => {
    navigation.navigate(AuthStackRoute.SignIn);
  }, []);

  useEffect(() => {
    if (!requesting && success && !error) {
      navigation.navigate(AuthStackRoute.SignIn);
    }
  }, [success, requesting, error]);

  const disableButton =
    Validator.isEmpty(username) ||
    !Validator.emailRegex(email) ||
    Validator.isEmpty(password);

  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <LabelCircle text="SIGNUP" />
        <View style={styles.logo}>
          <LogoIcon width={52} height={35} />
        </View>
        <Input
          icon={<UserIcon width={20} height={20} />}
          placeholder="Username"
          onChangeText={onChangeUsernameText}
          required={true}
          validationType={INPUT_VALIDATION_TYPE.TEXT}
        />
        <Spacer />
        <Input
          icon={<EmailIcon width={20} height={20} />}
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
          validationType={INPUT_VALIDATION_TYPE.TEXT} //TODO: Change validation type later for password
        />
        <Spacer />
        <Input
          icon={<MobileIcon width={20} height={20} />}
          placeholder="Mobile"
          onChangeText={onChangeMobileText}
          required={true}
          validationType={INPUT_VALIDATION_TYPE.TEXT} //TODO: Change validation type later for password
        />
        <Spacer height={50} />
        <Button
          text="SIGNUP"
          onPress={onSignUpPress}
          disabled={disableButton}
        />
        <Spacer height={50} />
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveAccount}>You have an account?</Text>
          <TouchableOpacity onPress={onSignInPress}>
            <Text style={styles.signup}>SignIn</Text>
          </TouchableOpacity>
        </View>
        <Spinner show={requesting} />
        <NoNetworkView show={!netInfo.isConnected} />
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default SignUpPageView;
