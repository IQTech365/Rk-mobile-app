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
import { IChangePasswordRequest } from '../../interface/changePassword/IChangePasswordRequest';
import { changePasswordRequest } from '../../redux/slices/changePasswordSlice';

const ChangePasswordPageView = (props: any) => {
    const { navigation } = props;
    const netInfo = useNetInfo();
    const dispatch = useAppDispatch();
    const { requesting, success, error, ChangePassword } = useAppSelector(
        state => state.ChangePassword,
    );

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [forgetError, setForgetError] = useState<boolean>(false);

    const onChangeUsernameText = (text: string) => { };

    const onChangeEmailText = (text: string) => {
        setEmail(text);
    };

    const onChangePasswordText = (text: string) => {
        setPassword(text);
    };

    const onSignUpPress = useCallback(() => {
        const payload: IChangePasswordRequest = {
            email: email,
            password: password,
        };
        if (netInfo.isConnected) {
            dispatch(changePasswordRequest(payload));
        }
    }, [email, password]);

    const onSignInPress = useCallback(() => {
        navigation.navigate(AuthStackRoute.SignIn);
    }, []);

    const _handleChangePasswordSuccess = async () => {
        if (ChangePassword?.code === 404 || ChangePassword?.code === 201) {
            setForgetError(true);
        } else {
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
        if (!requesting && success && !error) {
            _handleChangePasswordSuccess();
        }
    }, [success, requesting, error]);

    return (
        <AvoidSoftInputViewHOC>
            <View style={styles.container}>
                <LabelCircle text={`Change Password`} />
                <View style={styles.logo}>
                    <LogoIcon width={52} height={35} />
                </View>
                <Spacer />
                <View style={styles.emailDescription}>
                    <Text>Please change you Password.</Text>
                </View>
                <Spacer />
                <Input
                    icon={<EmailIcon width={20} height={20} />}
                    placeholder="Email"
                    onChangeText={onChangeEmailText}
                    error={null}
                />
                <Spacer height={25} />
                <Spacer />
                <Input
                    icon={<LockIcon width={20} height={20} />}
                    placeholder="password"
                    onChangeText={onChangePasswordText}
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
                    message={ChangePassword?.message}
                    onPress={handleAlert}
                    visible={forgetError}
                    variant={STATUS_CODE.ERROR}
                />
                <NoNetworkView show={!netInfo.isConnected} />
            </View>
        </AvoidSoftInputViewHOC>
    );
};

export default ChangePasswordPageView;
