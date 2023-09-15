import React, { useEffect } from 'react';
import { View, Text, Linking } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';
import Header2 from '../../common/Header2';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import ZoomLinkCard from './components/ZoomLinkCard';
import styles from './style';
import { fetchProfile } from '../../redux/slices/ProfileSlice';
import NoDataView from '../../common/NoData';

const ZoomPageView = (props: any) => {
  const { user } = useAppSelector(state => state.Signin);
  const { fetchProfileRequesting, profileData } = useAppSelector(state => state.Profile);
  const netInfo = useNetInfo();
  const dispatch = useAppDispatch();


  const handleZoomLink = () => {
    if (profileData?.data?.zoomLink) {


      Linking.openURL(profileData.data.zoomLink);
    }
  };

  useEffect(() => {
    dispatch(fetchProfile(user?.data?.id as string));
  }, [netInfo.isConnected]);

  return (
    <View style={styles.container}>
      <Header2 canGoBack={false} title="Zoom Link" />
      {profileData?.data?.zoomLink ? <ZoomLinkCard link={profileData?.data?.zoomLink} onPress={handleZoomLink} /> : <NoDataView />}
    </View>
  );
};

export default ZoomPageView;
