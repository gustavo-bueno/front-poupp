import { useEffect } from 'react';
import { Keyboard } from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { metrics } from '../styles';

const useAnimation = () => {
  const positionY = useSharedValue(300);
  const opacity = useSharedValue(0);
  const width = useSharedValue(metrics.wp(65));
  const height = useSharedValue(metrics.hp(35));

  const svgViewStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
      opacity: opacity.value,
    };
  });

  const opacityStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  const yAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: positionY.value }],
    };
  });

  const _keyboardDidShow = () => {
    width.value = withTiming(metrics.wp(48.75), { duration: 300 });
    height.value = withTiming(metrics.hp(26.25), { duration: 300 });
  };

  const _keyboardDidHide = () => {
    width.value = withTiming(metrics.wp(65), { duration: 500 });
    height.value = withTiming(metrics.hp(35), { duration: 500 });
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 });
    positionY.value = withTiming(0, { duration: 700 });
  }, []);

  return {
    svgViewStyle,
    yAnimationStyle,
    opacityStyle,
  };
};

export default useAnimation;
