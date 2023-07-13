import React, {useEffect} from 'react';
import {ScrollView, SafeAreaView, FlatList, View, Text} from 'react-native';
import Header from '../../common/Header';
import Label from '../../common/Label';
import Spacer from '../../common/Spacer';
import {IVideo} from '../../interface/home/IVideoResponse';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchBanners} from '../../redux/slices/BannerSlice';
import {fetchCategories} from '../../redux/slices/CategoriesSlice';
import {HomeStackRoute} from '../../utils/constants';
import Carousel from './components/Carousel';
import CategoryCard from './components/CategoryCard';
import ThumbnailCard from './components/ThumbnailCard';
import styles from './style';
import {useNetInfo} from '@react-native-community/netinfo';
import NoNetworkView from '../../common/NoNetwork';

const HomePageView = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const netInfo = useNetInfo();

  const {data: categoriesData} = useAppSelector(state => state.Categories);
  const {data: bannersData} = useAppSelector(state => state.Banners);

  const handleVideoClick = (item: IVideo): void => {
    navigation.navigate(HomeStackRoute.Player, {item: item});
  };

  const handleSearchClick = () => {
    navigation.navigate(HomeStackRoute.Search);
  };

  const handleNotificationClick = () => {
    navigation.navigate(HomeStackRoute.Notification);
  };

  const handleViewAll = (categoryId: string) => {
    navigation.navigate('Videos', {categoryId: categoryId});
  };

  useEffect(() => {
    if (netInfo.isConnected !== undefined && netInfo.isConnected) {
      dispatch(fetchCategories());
      dispatch(fetchBanners());
    }
  }, [netInfo.isConnected]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          onSearchPress={handleSearchClick}
          onNotificationPress={handleNotificationClick}
        />
        <Carousel items={bannersData?.data} />
        <Spacer height={8} />
        <FlatList
          horizontal
          data={categoriesData?.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <CategoryCard item={item} index={index} onPress={handleViewAll} />
          )}
        />
        <Spacer height={8} />
        {categoriesData?.data.map((category, index) => {
          return (
            <View key={`${category._id}`}>
              <Label
                text={category.categoryName}
                showIcon={true}
                isViewAll={true}
                onPress={() => {
                  handleViewAll(category._id);
                }}
                disabled={category.allVideos.length === 0}
              />
              <ScrollView
                style={styles.videoContainer}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {category.allVideos.map((video, i) => {
                  return (
                    <View key={`${video._id}`}>
                      <ThumbnailCard
                        item={video}
                        index={index}
                        onPress={handleVideoClick}
                      />
                    </View>
                  );
                })}
                {category.allVideos.length === 0 ? (
                  <View style={styles.noDataContainer}>
                    <Text>No Videos available!</Text>
                  </View>
                ) : null}
              </ScrollView>
            </View>
          );
        })}
      </ScrollView>
      <NoNetworkView show={!netInfo.isConnected} />
    </SafeAreaView>
  );
};

export default HomePageView;
