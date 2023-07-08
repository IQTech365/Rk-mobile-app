import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './style';
import Header2 from '../../common/Header2';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchNotifications} from '../../redux/slices/NotificationSlice';
import Spinner from '../../common/Spinner';
import Spacer from '../../common/Spacer';
import NoDataView from '../../common/NoData';

const NotificationView = (props: any) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();
  const {data, failure, success, requesting} = useAppSelector(
    state => state.Notification,
  );

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(fetchNotifications());
  }, []);

  if (requesting) {
    return <Spinner show={requesting} />;
  }

  return (
    <View style={styles.container}>
      <Header2
        title="Notifications"
        canGoBack={true}
        onPress={handleBackPress}
      />
      <Spacer height={10} />
      <FlatList
        data={[]}
        renderItem={() => <Text>notification 1</Text>}
        ListEmptyComponent={<NoDataView message='No notifications' />}
      />
    </View>
  );
};

export default NotificationView;
