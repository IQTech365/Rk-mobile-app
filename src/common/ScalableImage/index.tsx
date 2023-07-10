import React, {useState, useEffect, useRef} from 'react';

import PropTypes from 'prop-types';

import {Image, TouchableOpacity, ImageBackground} from 'react-native';

const resolveAssetSource = Image.resolveAssetSource;

const ScalableImage = (props: any) => {
  const ImageComponent = props.component
    ? props.component
    : props.background
    ? ImageBackground
    : Image;

  const [scalableWidth, setScalableWidth] = useState(0);
  const [scalableHeight, setScalableHeight] = useState(0);
  const [image, setImage] = useState();
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    onProps(props);
  });

  useEffect(() => {
    setImage(
      <ImageComponent
        {...props}
        style={[
          props.style,
          {
            width: scalableWidth,
            height: scalableHeight,
          },
        ]}
      />,
    );
  }, [scalableHeight, scalableWidth]);

  const onProps = (localProps: any) => {
    const {source} = localProps;
    if (source.uri) {
      const sourceToUse = source.uri ? source.uri : source;

      Image.getSize(
        sourceToUse,
        (width, height) => adjustSize(width, height, props),
        err => console.error(err),
      );
    } else {
      const sourceToUse = resolveAssetSource(source);
      adjustSize(sourceToUse.width, sourceToUse.height, props);
    }
  };

  const adjustSize = (sourceWidth: any, sourceHeight: any, localProps: any) => {
    const {width, height} = localProps;

    let ratio = 1;

    if (width && height) {
      ratio = Math.min(width / sourceWidth, height / sourceHeight);
    } else if (width) {
      ratio = width / sourceWidth;
    } else if (height) {
      ratio = height / sourceHeight;
    }

    if (mounted.current) {
      const computedWidth = sourceWidth * ratio;
      const computedHeight = sourceHeight * ratio;
      setScalableWidth(computedWidth);
      setScalableHeight(computedHeight);
      props.onSize({width: computedWidth, height: computedHeight});
    }
  };

  if (!props.onPress) {
    return image;
  } else {
    return <TouchableOpacity onPress={props.onPress}>{image}</TouchableOpacity>;
  }
};

ScalableImage.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  onPress: PropTypes.func,
  onSize: PropTypes.func,
  background: PropTypes.bool,
};

ScalableImage.defaultProps = {
  background: false,
  //@ts-ignore
  onSize: size => {},
};

export default ScalableImage;
