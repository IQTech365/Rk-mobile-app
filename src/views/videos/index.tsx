import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import styles from './style';
import Header2 from '../../common/Header2';
import Spacer from '../../common/Spacer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {IVideo} from '../../interface/home/IVideoResponse';
import ThumbnailCard from '../home/components/ThumbnailCard';
import NoDataView from '../../common/NoData';
import Spinner from '../../common/Spinner';
import { HomeStackParamList } from '../../navigation/params/HomeStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { fetchCategoeyVideos } from '../../redux/slices/CategoryVideosSlice';

type Props = NativeStackScreenProps<HomeStackParamList, 'Videos'>;

const VideosView: React.FC<Props> = ({route, navigation}) => {
  const categoryId: string | undefined = route.params?.categoryId;

  const dispatch = useAppDispatch();
  const {data, requesting} = useAppSelector(state => state.CategoryVideos);
  console.log('data-data----', JSON.stringify(data));

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleVideoClick = (item: IVideo): void => {
    navigation.navigate('Player', {item: item});
  };

  useEffect(()=> {
    dispatch(fetchCategoeyVideos(categoryId as string))
  }, []);

  return (
    <View style={styles.container}>
      <Header2 title="Category Videos" canGoBack={true} onPress={handleBackPress} />
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
              playButtonStyle={styles.playButtonStyle}
            />
          )}
          ListEmptyComponent={<NoDataView message="No video found!" />}
        />
      )}
    </View>
  );
};

export default VideosView;
