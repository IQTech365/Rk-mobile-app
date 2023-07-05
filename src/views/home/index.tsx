import React, { useEffect } from 'react';
import {ScrollView, SafeAreaView, FlatList, Dimensions} from 'react-native';
import Header from '../../common/Header';
import Label from '../../common/Label';
import Spacer from '../../common/Spacer';
import { IVideo } from '../../interface/home/IVideoResponse';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchBanners } from '../../redux/slices/BannerSlice';
import { fetchCategories } from '../../redux/slices/CategoriesSlice';
import { fetchVideos } from '../../redux/slices/VideosSlice';
import { HomeStackRoute } from '../../utils/constants';
import Carousel from './components/Carousel';
import CategoryCard from './components/CategoryCard';
import ThumbnailCard from './components/ThumbnailCard';
import styles from './style';

const tempCategories = ['Skill Development', 'Motivational', 'Motivational', 'Motivational']

const HomePageView = (props:any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  
  const { data: categoriesData } = useAppSelector(state => state.Categories);
  const {data: videosData} = useAppSelector(state => state.Videos);
  const { data: bannersData } = useAppSelector(state => state.Banners);
  // console.log('data----categoriesData----', JSON.stringify(categoriesData));
  // console.log('data----videosData----', JSON.stringify(videosData));
  // console.log('data----bannersData----', JSON.stringify(bannersData));
  
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchVideos());
    dispatch(fetchBanners());
  }, []);

  const handleVideoClick = (item: IVideo): void => {
    navigation.navigate(HomeStackRoute.Player, {item: item});
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Carousel items={bannersData?.data}/>
        <Spacer height={8} />
        <FlatList
          horizontal
          data={categoriesData?.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <CategoryCard length={tempCategories.length} item={item} index={index}/>
          )}
        />
        <Spacer height={8} />
        <Label text='Short Videos' />
        <FlatList
          horizontal
          data={videosData?.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} onPress={handleVideoClick} />
          )}
        />
        <Spacer height={8} />
        <Label text='Recommended Videos' />
        <FlatList
          horizontal
          data={videosData?.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} onPress={handleVideoClick} />
          )}
        />
        <Spacer height={8} />
        <Label text='Skill Development Videos' />
        <FlatList
          horizontal
          data={videosData?.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} onPress={handleVideoClick} />
          )}
        />
        <Spacer height={8} />
        <Label text='Motivational Videos' />
        <FlatList
          horizontal
          data={videosData?.data}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} onPress={handleVideoClick} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePageView;
