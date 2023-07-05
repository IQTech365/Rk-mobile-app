import React, {useState, useRef, useEffect} from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import {IBanner} from '../../../../interface/home/IBannerResponse';
import BannerCard from '../BannerCard';
import styles from './style';

const {width} = Dimensions.get('window');
interface ICarouselProps {
  items: Array<IBanner> | null | undefined;
}

const Carousel: React.FC<ICarouselProps> = ({items}) => {
  const flatlistRef = useRef();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = scrollPosition / width;
    setActiveIndex(index);
  };

  const getItemLayout = (data: any, index: number) => ({
    length: width,
    offset: width * index,
    index: index,
  });

//   useEffect(() => {
//     let interval = setInterval(() => {
//         //@ts-ignore
//       if (activeIndex === items?.length - 1) {
//         //@ts-ignore
//         flatlistRef?.current?.scrollToIndex({
//           index: 0,
//           animation: true,
//         });
//       } else {
//         //@ts-ignore
//         flatlistRef?.current?.scrollToIndex({
//           index: activeIndex,
//           animation: true,
//         });
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

  return (
    <>
      <FlatList
        horizontal
        //@ts-ignore
        ref={flatlistRef}
        data={items}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => <BannerCard item={item} index={index} />}
        getItemLayout={getItemLayout}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View style={styles.indicatorContainer}>
        {items?.map((_, i) => {
          const indicatoryStyle =
          activeIndex === i ? styles.dotActive : styles.dotInactive;
          return <View key={i} style={indicatoryStyle} />;
        })}
      </View>
    </>
  );
};

export default Carousel;
