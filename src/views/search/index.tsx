import React from 'react';
import {View} from 'react-native';
import styles from './style';
import SendMessageIcon from '../../images/icons/search.svg';
import ChatInput from '../../common/ChatInput';
import Header2 from '../../common/Header2';
import Spacer from '../../common/Spacer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const SearchView = (props:any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const {} = useAppSelector(state => state.Videos)

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header2 title='Search' canGoBack={true} onPress={handleBackPress} />
      <Spacer height={10} />
      <ChatInput
        icon={<SendMessageIcon width={24} height={24} />}
        placeholder="Search..."
        onChangeText={() => {}}
        onPress={() => {}}
      />
    </View>
  );
};

export default SearchView;
