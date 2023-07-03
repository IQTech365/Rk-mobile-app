import React, { useEffect } from 'react';
import {View, Text, ScrollView, SafeAreaView, FlatList} from 'react-native';
import Header from '../../common/Header';
import Label from '../../common/Label';
import Spacer from '../../common/Spacer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCategories } from '../../redux/slices/CategoriesSlice';
import { fetchVideos } from '../../redux/slices/VideosSlice';
import BannerCard from './components/BannerCard';
import CategoryCard from './components/CategoryCard';
import ThumbnailCard from './components/ThumbnailCard';
import styles from './style';

const tempBanners = [1, 2, 3, 4];
const tempCategories = ['Skill Development', 'Motivational', 'Motivational', 'Motivational']

const HomePageView = (props:any) => {
  const dispatch = useAppDispatch();
  const { data: categoriesData } = useAppSelector(state => state.Categories);
  const {data: videosData} = useAppSelector(state => state.Videos);
  console.log('data----categoriesData----', JSON.stringify(categoriesData));
  console.log('data----videosData----', JSON.stringify(videosData));
  
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchVideos());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Spacer height={8} />
        <FlatList
          horizontal
          data={tempBanners}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <BannerCard length={tempBanners.length} item={item} index={index} />
          )}
        />
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
        <Label text='Continue Watching' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} />
          )}
        />
        <Spacer height={8} />
        <Label text='Short Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} />
          )}
        />
        <Spacer height={8} />
        <Label text='Recommended Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} />
          )}
        />
        <Spacer height={8} />
        <Label text='Skill Development Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} />
          )}
        />
        <Spacer height={8} />
        <Label text='Motivational Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} index={index} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePageView;
