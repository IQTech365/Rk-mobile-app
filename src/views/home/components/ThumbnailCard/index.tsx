import React from 'react';
import {View, TouchableOpacity, Image, ViewStyle, ImageStyle} from 'react-native';
import styles from './style';
import {Shadow} from 'react-native-shadow-2';
import {IVideo} from '../../../../interface/home/IVideoResponse';
import PlayIcon from '../../../../images/icons/play.svg';

interface IThumbnailCardProps {
  item: IVideo;
  index: number;
  onPress: (video: IVideo) => void;
  style?: ViewStyle;
  tumbnailStyle?: ImageStyle;
  playButtonStyle?: ViewStyle;
}

const ThumbnailCard: React.FC<IThumbnailCardProps> = ({
  index,
  item,
  onPress,
  style,
  tumbnailStyle,
  playButtonStyle,
}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: 10, paddingVertical: 10}}
      activeOpacity={0.6}
      onPress={() => onPress(item)}>
      <Shadow style={[styles.container]} distance={5}>
        <View key={index} style={[styles.cardContainer, style]}>
          <Image source={{uri: item.videoThumbnail}} style={[styles.video, tumbnailStyle]} />
          <View style={[styles.playButtonContainer, playButtonStyle]}>
            <PlayIcon width={40} height={40} />
          </View>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
};

export default ThumbnailCard;
