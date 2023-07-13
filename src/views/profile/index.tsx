import React, {useCallback, useEffect, useState} from 'react';
import {View, Dimensions, TouchableOpacity, Image, Text} from 'react-native';
import styles from './style';
import Button from '../../common/Button';
import Spacer from '../../common/Spacer';
import ProfileBackgroundImage from '../../images/icons/profile-bg.svg';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import {removeLoginStatus, removeToken} from '../../utils/storage';
import {useAuthContext} from '../../provider/AuthProvider';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import ChatInput from '../../common/ChatInput';
import EditIcon from '../../images/icons/edit.svg';
import LogoutIcon from '../../images/icons/logout.svg';
import {
  fetchProfile,
  resetUpdateProfile,
  updateProfile,
} from '../../redux/slices/ProfileSlice';
import Spinner from '../../common/Spinner';
import AvatarIcon from '../../images/icons/user.png';
import {useNetInfo} from '@react-native-community/netinfo';
import NoNetworkView from '../../common/NoNetwork';
import {IProfile} from '../../interface/profile/IProfileResponse';
import Alert, {STATUS_CODE} from '../../common/Alert';
import { logout } from '../../redux/slices/SigninSlice';

const {width} = Dimensions.get('window');

interface IProfilePageProps {
  navigation: any;
}

const ProfilePageView: React.FC<IProfilePageProps> = ({navigation}) => {
  const {setLoggedIn} = useAuthContext();
  const dispatch = useAppDispatch();
  const netInfo = useNetInfo();
  const {user} = useAppSelector(state => state.Signin);
  const {
    requesting,
    success,
    error,
    fetchProfileRequesting,
    profileData,
    data,
  } = useAppSelector(state => state.Profile);
  const [editForm, setEditForm] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [pinCode, setPinCode] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<STATUS_CODE>(STATUS_CODE.NONE);
  const [alertMessage, setAlertMessage] = useState<string>('');

  // console.log('profileData----', JSON.stringify(profileData));

  const handleLogout = async () => {
    await removeLoginStatus();
    await removeToken();
    setLoggedIn(false);
    dispatch(logout());
  };

  const handleSaveChanges = () => {
    const dataToUpdate: Partial<IProfile> = {
      mobile: mobile,
      city,
      state,
      pincode: pinCode,
      address,
      userId: user?.data.id,
    };
    // console.log('user-data-to-update----', JSON.stringify(dataToUpdate));

    dispatch(updateProfile(dataToUpdate));
  };

  const handleEditClick = () => {
    setEditForm(!editForm);
  };

  const handleEmailChangeText = useCallback(
    (text: string) => {
      setEmail(text);
    },
    [email],
  );

  const handleMobileChangeText = useCallback(
    (text: string) => {
      setMobile(text);
    },
    [mobile],
  );

  const handleCityChangeText = useCallback(
    (text: string) => {
      setCity(text);
    },
    [city],
  );

  const handleStateChangeText = useCallback(
    (text: string) => {
      setState(text);
    },
    [state],
  );

  const handlePincodeChangeText = useCallback(
    (text: string) => {
      setPinCode(text);
    },
    [pinCode],
  );

  const handleAddressChangeText = useCallback(
    (text: string) => {
      setAddress(text);
    },
    [address],
  );

  const handleAlert = () => {
    setShowAlert(false);
    setAlertType(STATUS_CODE.NONE);
    setAlertMessage('');
    dispatch(resetUpdateProfile());
    dispatch(fetchProfile(user?.data?.id as string));
  };

  useEffect(() => {
    dispatch(fetchProfile(user?.data?.id as string));
  }, [netInfo.isConnected]);

  useEffect(() => {
    if (profileData?.data) {
      setMobile(profileData.data.mobile);
      setCity(profileData.data.city);
      setState(profileData.data.state);
      setPinCode(profileData.data.pincode);
      setAddress(profileData.data.address);
    }
  }, [profileData]);

  useEffect(() => {
    if (!requesting && data?.code !== 400 && (success || error)) {
      setEditForm(false);
      setAlertType(STATUS_CODE.SUCCESS);
      setAlertMessage('Profile updated successfully!');
      setShowAlert(true);
    } else if (!requesting && data?.code === 400) {
      setAlertType(STATUS_CODE.ERROR);
      setAlertMessage(data.message);
      setShowAlert(true);
    }
  }, [requesting, success, error]);

  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <ProfileBackgroundImage width={width} height={210} />
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {/* <Image source={AvatarIcon} style={styles.avatarImage} /> */}
              <View style={styles.avatarImage}>
              <Text style={styles.nameInitialText}>{user?.data.username.charAt(0)}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.editIconContainer}>
          <TouchableOpacity onPress={handleEditClick}>
            <EditIcon width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            <LogoutIcon width={24} height={24} />
          </TouchableOpacity>
        </View>
        <ChatInput
          onChangeText={() => {}}
          value={user?.data?.username}
          editable={false}
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleEmailChangeText}
          value={user?.data?.email as string}
          editable={false}
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleMobileChangeText}
          value={mobile}
          editable={editForm}
          placeholder="+XX XXXXX XXXXX"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleCityChangeText}
          value={city}
          editable={editForm}
          placeholder="City"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleStateChangeText}
          value={state}
          editable={editForm}
          placeholder="State"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handlePincodeChangeText}
          value={pinCode}
          editable={editForm}
          placeholder="Pincode"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleAddressChangeText}
          value={address}
          editable={editForm}
          placeholder="Address"
        />
        <View style={styles.buttonContainer}>
          <Button
            text="Save"
            onPress={handleSaveChanges}
            disabled={!editForm}
          />
        </View>
        <Spinner show={fetchProfileRequesting || requesting} />
        <NoNetworkView show={!netInfo.isConnected} />
        <Alert
          variant={alertType}
          visible={showAlert}
          onPress={handleAlert}
          message={alertMessage}
        />
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default ProfilePageView;
