import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import LabelCircle from '../../common/LabelCircle';
import styles from './styles';
import LogoIcon from '../../images/icons/logo.svg';
import UserIcon from '../../images/icons/user2.svg';
import LockIcon from '../../images/icons/lock.svg';
import EmailIcon from '../../images/icons/email.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import Button from '../../common/Button';
import Input from '../../common/Input';
import Spacer from '../../common/Spacer';
import { AuthStackRoute } from '../../utils/constants';
import { IForgetPasswordRequest } from '../../interface/forgetPassword/IForgetPasswordRequest';
import { forgetRequest } from '../../redux/slices/ForgetPasswordSlice';
import Alert, { STATUS_CODE } from '../../common/Alert';
import Spinner from '../../common/Spinner';
import NoNetworkView from '../../common/NoNetwork';
import { removeSubscribed, setSubscribed } from '../../utils/storage';

const ForgotPasswordPageView = (props: any) => {
  const { navigation } = props;
  const netInfo = useNetInfo();
  const dispatch = useAppDispatch();
  const { requesting, success, error, forgetPassword } = useAppSelector(
    state => state.ForgetPassword,
  );

  const [email, setEmail] = useState<string>('');
  const [forgetError, setForgetError] = useState<boolean>(false);

  const onChangeUsernameText = (text: string) => { };

  const onChangeEmailText = (text: string) => {
    setEmail(text);
  };

  const onChangePasswordText = (text: string) => { };

  const onSignUpPress = useCallback(() => {
    const payload: IForgetPasswordRequest = {
      email: email,
    };
    if (netInfo.isConnected) {
      dispatch(forgetRequest(payload));
    }
  }, [email]);

  const onSignInPress = useCallback(() => {
    navigation.navigate(AuthStackRoute.SignIn);
  }, []);

  const _handleForgetSuccess = async () => {
    if (forgetPassword?.code === 404 || forgetPassword?.code === 201) {
      setForgetError(true);
    } else {
      console.log('forget password sucess');
      if (forgetPassword.message === 'User found!') {
        navigation.navigate(AuthStackRoute.ChangePassword)
      }
      // if (forgetPassword?.data.isSubscribed) {
      //   await setSubscribed('subscribe');
      // } else {
      //   await removeSubscribed();
      // }
    }
  };

  const handleAlert = () => {
    setForgetError(false);
  };

  useEffect(() => {
    console.log(forgetPassword, 'sucess data..');

    if (!requesting && success && !error) {
      _handleForgetSuccess();
    }
  }, [success, requesting, error]);

  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <LabelCircle text={`Forgot Password`} />
        <View style={styles.logo}>
          <LogoIcon width={52} height={35} />
        </View>
        <Spacer />
        <View style={styles.emailDescription}>
          <Text>Please enter your registered email.</Text>
        </View>
        <Spacer />
        <Input
          icon={<EmailIcon width={20} height={20} />}
          placeholder="Email"
          onChangeText={onChangeEmailText}
          error={null}
        />
        <Spacer height={50} />
        <Button text="SUBMIT" onPress={onSignUpPress} />
        <Spacer height={50} />
        <View style={styles.signupContainer}>
          <Text style={styles.dontHaveAccount}>Back to</Text>
          <TouchableOpacity onPress={onSignInPress}>
            <Text style={styles.signup}>SignIn</Text>
          </TouchableOpacity>
        </View>
        <Spinner show={requesting} />
        <Alert
          message={forgetPassword?.message}
          onPress={handleAlert}
          visible={forgetError}
          variant={STATUS_CODE.ERROR}
        />
        <NoNetworkView show={!netInfo.isConnected} />
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default ForgotPasswordPageView;
