import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing
} from "react-native-reanimated";

const useHandleAnimations = ({
  isVisible,
  handleToggle
}: {
  isVisible: boolean;
  handleToggle: () => void;
}) => {
  const rotation = useSharedValue(0);
  const translateX = useSharedValue(300);
  const welcomeTranslateX = useSharedValue(0);

  const iconAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }]
  }));

  const textFieldAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }]
  }));

  const welcomeAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: welcomeTranslateX.value }]
  }));

  const toggleIcon = () => {
    handleToggle();
    rotation.value = withTiming(isVisible ? 0 : 360, {
      duration: 500,
      easing: Easing.elastic(1)
    });
    translateX.value = withTiming(isVisible ? 300 : 0, {
      duration: 500,
      easing: Easing.out(Easing.exp)
    });
    welcomeTranslateX.value = withTiming(isVisible ? 0 : 300, {
      duration: 500,
      easing: Easing.out(Easing.exp)
    });
  };

  return {
    iconAnimatedStyles,
    textFieldAnimatedStyles,
    welcomeAnimatedStyles,
    toggleIcon
  };
};

export default useHandleAnimations;
