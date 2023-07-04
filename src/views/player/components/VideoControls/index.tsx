import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import SkipForwardIcon from '../../../../images/icons/forward.svg';
import SkipBackwardIcon from '../../../../images/icons/backward.svg';
import PauseIcon from '../../../../images/icons/pause.svg';
import PlayIcon from '../../../../images/icons/play.svg';
import PreviousIcon from '../../../../images/icons/previous.svg';
import NextIcon from '../../../../images/icons/next.svg';

import styles from './style';

interface Props {
  playing: boolean;
  showPreviousAndNext: boolean;
  showSkip: boolean;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  onPlay: () => void;
  onPause: () => void;
  skipForwards?: () => void;
  skipBackwards?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export const PlayerControls: React.FC<Props> = ({
  playing,
  showPreviousAndNext,
  showSkip,
  previousDisabled,
  nextDisabled,
  onPlay,
  onPause,
  skipForwards,
  skipBackwards,
  onNext,
  onPrevious,
}) => (
  <View style={styles.wrapper}>
    {showPreviousAndNext && (
      <TouchableOpacity
        style={[styles.touchable, previousDisabled && styles.touchableDisabled]}
        onPress={onPrevious}
        disabled={previousDisabled}>
        <PreviousIcon width={32} height={32} />
      </TouchableOpacity>
    )}

    {showSkip && (
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
        <SkipBackwardIcon width={32} height={32} />
      </TouchableOpacity>
    )}

    <TouchableOpacity
      style={styles.touchable}
      onPress={playing ? onPause : onPlay}>
      {playing ? <PauseIcon width={32} height={32} /> : <PlayIcon width={32} height={32} />}
    </TouchableOpacity>

    {showSkip && (
      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
        <SkipForwardIcon width={32} height={32} />
      </TouchableOpacity>
    )}

    {showPreviousAndNext && (
      <TouchableOpacity
        style={[styles.touchable, nextDisabled && styles.touchableDisabled]}
        onPress={onNext}
        disabled={nextDisabled}>
        <NextIcon width={32} height={32} />
      </TouchableOpacity>
    )}
  </View>
);