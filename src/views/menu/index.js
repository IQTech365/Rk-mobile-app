import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import Header2 from '../../common/Header2';
import Label from '../../common/Label';
import Spacer from '../../common/Spacer';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchCMSPages} from '../../redux/slices/CMSSlice';
import CMSItem from './components/CMSItem';
import styles from './style';

const MenuPageView = props => {
    const {navigation} = props;
  const dispatch = useAppDispatch();
  const {data, requesting, success, error} = useAppSelector(state => state.CMS);
  console.log('cms-data----', JSON.stringify(data));

  useEffect(() => {
    dispatch(fetchCMSPages());
  }, []);

  const handleItemClick = (item) => {
      navigation.navigate('CMS', {content: item.pageDescription, title: item.pageTitle})
  }

  return (
    <View style={styles.container}>
      <Header2 title="Menu" canGoBack={false} />
      <Spacer height={8} />
      <FlatList
        data={data?.data}
        renderItem={({item, index}) => (
          <View style={styles.item}>
            <Label showBorder={true} text={item.pageTitle} showIcon={true} onPress={() => {
                handleItemClick(item);
            }} />
          </View>
        )}
      />
    </View>
  );
};

export default MenuPageView;
