import React from 'react';
import {View, SafeAreaView, Dimensions, ScrollView} from 'react-native';
import styles from './style';
import Button from '../../common/Button';
import Label from '../../common/Label';
import Spacer from '../../common/Spacer';
import ProfileBackgroundImage from '../../images/icons/profile-bg.svg';
import { setLoginStatus } from '../../utils/storage';
import { useAuthContext } from '../../provider/AuthProvider';
import { useAppSelector } from '../../redux/hooks';
const {width} = Dimensions.get('window');

interface IProfilePageProps {}

const ProfilePageView: React.FC<IProfilePageProps> = ({}) => {
  const {setLoggedIn} = useAuthContext();
  const {user} = useAppSelector(state => state.Signin);

  const handleLogout = async () => {
    await setLoginStatus('');
    setLoggedIn(false);

  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.topContainer}>
        <ProfileBackgroundImage width={width} height={210} />
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
      </View>
      <Label text={user?.data?.username as string} showBorder={true} />
      <Spacer height={8} />
      <Label text={user?.data?.email as string} showBorder={true} />
      <Spacer height={8} />
      <Label text="+91 97110 122 43" showBorder={true} showIcon={true} />
      <Spacer height={8} />
      <Label text="Zoom Link" showBorder={true} showIcon={true} isCopy={true} />
      <Spacer height={8} />
      <Label text="Subscriptions" showBorder={true} showIcon={true} />
      <View style={styles.buttonContainer}>
        <Button text="Logout" onPress={handleLogout} />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePageView;
