import React from 'react';
import {View, Text, ScrollView, SafeAreaView, FlatList} from 'react-native';
import Header from '../../common/Header';
import Label from '../../common/Label';
import Spacer from '../../common/Spacer';
import BannerCard from './components/BannerCard';
import CategoryCard from './components/CategoryCard';
import ThumbnailCard from './components/ThumbnailCard';
import styles from './style';

const tempBanners = [1, 2, 3, 4];
const tempCategories = ['Skill Development', 'Motivational', 'Motivational', 'Motivational']

const HomePageView = props => {
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
            <BannerCard length={tempBanners.length} />
          )}
        />
        <Spacer height={8} />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <CategoryCard length={tempCategories.length} item={item} />
          )}
        />
        <Spacer height={8} />
        <Label text='Continue Watching' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} />
          )}
        />
        <Spacer height={8} />
        <Label text='Short Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} />
          )}
        />
        <Spacer height={8} />
        <Label text='Recommended Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} />
          )}
        />
        <Spacer height={8} />
        <Label text='Skill Development Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} />
          )}
        />
        <Spacer height={8} />
        <Label text='Motivational Videos' />
        <FlatList
          horizontal
          data={tempCategories}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ThumbnailCard length={tempCategories.length} item={item} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePageView;
