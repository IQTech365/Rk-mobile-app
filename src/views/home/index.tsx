import React, {useEffect} from 'react';
import {ScrollView, SafeAreaView, FlatList, View, Text} from 'react-native';
import Header from '../../common/Header';
import Label from '../../common/Label';
import Spacer from '../../common/Spacer';
import {IVideo} from '../../interface/home/IVideoResponse';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchBanners} from '../../redux/slices/BannerSlice';
import {fetchCategories} from '../../redux/slices/CategoriesSlice';
import {fetchVideos} from '../../redux/slices/VideosSlice';
import {HomeStackRoute} from '../../utils/constants';
import Carousel from './components/Carousel';
import CategoryCard from './components/CategoryCard';
import ThumbnailCard from './components/ThumbnailCard';
import styles from './style';

const HomePageView = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  const {data: categoriesData} = useAppSelector(state => state.Categories);
  const {data: videosData} = useAppSelector(state => state.Videos);
  const {data: bannersData} = useAppSelector(state => state.Banners);
  console.log('data----categoriesData----', JSON.stringify(categoriesData));
  // console.log('data----videosData----', JSON.stringify(videosData));
  // console.log('data----bannersData----', JSON.stringify(bannersData));

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchVideos());
    dispatch(fetchBanners());
  }, []);

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
            <>
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
                {category.allVideos.map((video, index) => {
                  return (
                    <ThumbnailCard
                      item={video}
                      index={index}
                      onPress={handleVideoClick}
                    />
                  );
                })}
                {category.allVideos.length === 0 ? (
                  <View style={styles.noDataContainer}>
                    <Text>No Videos available!</Text>
                  </View>
                ) : null}
              </ScrollView>
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePageView;
