import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { createRef, useEffect, useState } from 'react';
import Video from 'react-native-video';
import {
  StatusBar,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import { IVideo } from '../../interface/home/IVideoResponse';
import { HomeStackParamList } from '../../navigation/params/HomeStackParamList';
import styles from './style';
import Orientation from 'react-native-orientation-locker';
import ExitFullScreenIcon from '../../images/icons/exit-full-screen.svg';
import FullScreenIcon from '../../images/icons/full-screen.svg';
import CloseIcon from '../../images/icons/close.svg';
import { PlayerControls } from './components/VideoControls';
import { ProgressBar } from './components/ProgressBar';

type Props = NativeStackScreenProps<HomeStackParamList, 'Player'>;

const Player: React.FC<Props> = ({ route, navigation }) => {
  const item: IVideo | undefined = route.params?.item;
  const playerRef = createRef();
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [play, setPlay] = useState<boolean>(true);
  const [showControls, setShowControls] = useState<boolean>(false);

  const handleOrientation = (orientation: string) => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setFullScreen(true);
      StatusBar.setHidden(true);
    } else {
      setFullScreen(false);
      StatusBar.setHidden(false);
    }
  };

  const handlePlayPause = () => {
    // If playing, pause and show controls immediately.
    if (play) {
      setPlay(false);
      setShowControls(true);
      return;
    }
    setPlay(true);
    setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  const skipBackward = () => {
    //@ts-ignore
    playerRef?.current?.seek(currentTime - 10);
    setCurrentTime(currentTime - 10);
  };

  const skipForward = () => {
    //@ts-ignore
    playerRef?.current?.seek(currentTime + 10);
    setCurrentTime(currentTime + 10);
  };

  const handleFullScreen = () => {
    if (fullScreen) {
      Orientation.unlockAllOrientations();
    } else {
      Orientation.lockToLandscape();
    }
  };

  const handleShowControls = () => {
    if (showControls) {
      setShowControls(false);
    } else {
      setShowControls(true);
    }
  };

  const onLoadEnd = (data: any) => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  const onEnd = () => {
    setPlay(false);
    //@ts-ignore
    playerRef?.current?.seek(0);
  };

  const onSeek = (data: any) => {
    //@ts-ignore
    playerRef?.current?.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  };

  const handleClose = () => {
    navigation.goBack();
  };

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);
    return () => {
      Orientation.removeOrientationListener(handleOrientation);
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleShowControls}>
        <View>
          <Video
            ref={playerRef}
            // source={{
            //   uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            // }}
            source={{ uri: item?.videoURL }}
            style={fullScreen ? styles.fullscreenVideo : styles.video}
            controls={false}
            resizeMode={'contain'}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            onEnd={onEnd}
            paused={!play}
          />
          {showControls && (
            <View style={styles.controlOverlay}>
              <View style={styles.fullscreenButton}>
                <TouchableOpacity
                  onPress={handleClose}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <CloseIcon width={32} height={32} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleFullScreen}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  {fullScreen ? (
                    <ExitFullScreenIcon width={32} height={32} />
                  ) : (
                    <FullScreenIcon width={32} height={32} />
                  )}
                </TouchableOpacity>
              </View>
              <PlayerControls
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
                playing={play}
                showPreviousAndNext={false}
                showSkip={true}
                skipBackwards={skipBackward}
                skipForwards={skipForward}
              />
              <ProgressBar
                currentTime={currentTime}
                duration={duration > 0 ? duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                onSlideCapture={onSeek}
              />
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Player;
