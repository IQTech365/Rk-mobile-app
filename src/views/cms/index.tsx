import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, useWindowDimensions, ScrollView} from 'react-native';
import Header2 from '../../common/Header2';
import Spacer from '../../common/Spacer';
import {HomeStackParamList} from '../../navigation/params/HomeStackParamList';
import styles from './style';
import RenderHtml from 'react-native-render-html';

type Props = NativeStackScreenProps<HomeStackParamList, 'CMS'>;

const CMSPageView: React.FC<Props> = ({route, navigation}) => {
  const {width} = useWindowDimensions();
  const content: string | undefined = route.params?.content;
  const title: string | undefined = route.params?.title;
  const source = {
    html: content as string,
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Header2 title={title as string} canGoBack={true} onPress={handleGoBack} />
      <Spacer height={8} />
      <ScrollView contentContainerStyle={styles.contentContaienr}>
        <RenderHtml contentWidth={width} source={source} />
      </ScrollView>
    </View>
  );
};

export default CMSPageView;
