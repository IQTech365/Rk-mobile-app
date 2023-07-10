import React, { useCallback, useEffect, useState } from 'react';
import {View, Dimensions, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import Button from '../../common/Button';
import Spacer from '../../common/Spacer';
import ProfileBackgroundImage from '../../images/icons/profile-bg.svg';
import AvoidSoftInputViewHOC from '../../common/AvoidSoftInputViewHOC';
import {removeLoginStatus, removeToken, setLoginStatus} from '../../utils/storage';
import {useAuthContext} from '../../provider/AuthProvider';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import ChatInput from '../../common/ChatInput';
import EditIcon from '../../images/icons/edit.svg';
import LogoutIcon from '../../images/icons/logout.svg';
import { fetchProfile, resetUpdateProfile, updateProfile } from '../../redux/slices/ProfileSlice';
import Spinner from '../../common/Spinner';
import { IProfileUpdateRequest } from '../../interface/profile/IProfileUpdateRequest';
import AvatarIcon from '../../images/icons/user.png';

const {width} = Dimensions.get('window');

interface IProfilePageProps {
  navigation: any;
}

const ProfilePageView: React.FC<IProfilePageProps> = ({navigation}) => {
  const {setLoggedIn} = useAuthContext();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.Signin);
  const {requesting, success, error, fetchProfileRequesting} = useAppSelector(state => state.Profile);
  const [editForm, setEditForm] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [pinCode, setPinCode] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const handleLogout = async () => {
    await removeLoginStatus();
    await removeToken();
    setLoggedIn(false);
  };

  const handleSaveChanges = () => {
    const  data: IProfileUpdateRequest = {email, phone: mobile, city, state, pinCode, address};
    dispatch(updateProfile(data));

  }

  const handleEditClick = () => {
    setEditForm(!editForm);
  }

  const handleEmailChangeText = useCallback((text:string) => {
    setEmail(text);
  }, [email]);

  const handleMobileChangeText = useCallback((text:string) => {
    setMobile(text);
  }, [mobile]);

  const handleCityChangeText = useCallback((text:string) => {
    setCity(text);
  }, [city]);

  const handleStateChangeText = useCallback((text:string) => {
    setState(text);
  }, [state]);

  const handlePincodeChangeText = useCallback((text:string) => {
    setPinCode(text);
  }, [pinCode]);

  const handleAddressChangeText = useCallback((text:string) => {
    setAddress(text);
  }, [address]);

  useEffect(() => {
    dispatch(fetchProfile(user?.data?.id as string));
  }, []);

  useEffect(() => {
    if(!requesting && (success || error)) {
      setEditForm(false);
      dispatch(resetUpdateProfile());
      // dispatch(fetchProfile(user?.data?.id as string));
    }
  }, [requesting, success, error]);

  return (
    <AvoidSoftInputViewHOC>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <ProfileBackgroundImage width={width} height={210} />
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Image source={AvatarIcon} style={styles.avatarImage} />
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
          editable={editForm}
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleEmailChangeText}
          value={user?.data?.email as string}
          editable={editForm}
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleMobileChangeText}
          // value={user?.data?.email as string}
          editable={editForm}
          placeholder="+XX XXXXX XXXXX"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleCityChangeText}
          // value={user?.data?.email as string}
          editable={editForm}
          placeholder="City"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleStateChangeText}
          // value={user?.data?.email as string}
          editable={editForm}
          placeholder="State"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handlePincodeChangeText}
          // value={user?.data?.email as string}
          editable={editForm}
          placeholder="Pincode"
        />
        <Spacer height={8} />
        <ChatInput
          onChangeText={handleAddressChangeText}
          // value={user?.data?.email as string}
          editable={editForm}
          placeholder="Address"
        />
        <View style={styles.buttonContainer}>
          <Button text="Save" onPress={handleSaveChanges} disabled={!editForm} />
        </View>
        <Spinner show={fetchProfileRequesting || requesting} />
      </View>
    </AvoidSoftInputViewHOC>
  );
};

export default ProfilePageView;
