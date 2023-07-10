import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import SendMessageIcon from '../../images/icons/search.svg';
import ChatInput from '../../common/ChatInput';
import Header2 from '../../common/Header2';
import Spacer from '../../common/Spacer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {searchVideos} from '../../redux/slices/SearchVideoSlice';
import {IVideo} from '../../interface/home/IVideoResponse';
import {HomeStackRoute} from '../../utils/constants';
import ThumbnailCard from '../home/components/ThumbnailCard';
import NoDataView from '../../common/NoData';
import Spinner from '../../common/Spinner';
import {useNetInfo} from "@react-native-community/netinfo";
import NoNetworkView from '../../common/NoNetwork';

const SearchView = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const {data, requesting} = useAppSelector(state => state.SearchVideo);
  const netInfo = useNetInfo();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleInputTextChange = (text: string) => {
    if (text.length >= 3 && netInfo.isConnected) {
      dispatch(searchVideos(''));
    }
  };

  const handleVideoClick = (item: IVideo): void => {
    navigation.navigate(HomeStackRoute.Player, {item: item});
  };

  return (
    <View style={styles.container}>
      <Header2 title="Search" canGoBack={true} onPress={handleBackPress} />
      <Spacer height={10} />
      <ChatInput
        icon={<SendMessageIcon width={24} height={24} />}
        placeholder="Search..."
        onChangeText={handleInputTextChange}
        onPress={() => {}}
      />
      <Spacer height={10} />
      {requesting ? (
        <Spinner show={requesting} />
      ) : (
        <FlatList
          data={data?.data}
          style={{alignSelf: 'center'}}
          renderItem={({item, index}) => (
            <ThumbnailCard
              item={item}
              index={index}
              onPress={handleVideoClick}
              style={styles.videoCard}
              tumbnailStyle={styles.tumbnail}
            />
          )}
          ListEmptyComponent={<NoDataView message="Please type in search box..." />}
        />
      )}
      <NoNetworkView show={!netInfo.isConnected}/>
    </View>
  );
};

export default SearchView;
