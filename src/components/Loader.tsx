import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  interpolate,
  useAnimatedProps,
} from 'react-native-reanimated';

type LoaderProps = {
  progress: Animated.SharedValue<number>;
  size: number;
  strokeWidth: number;
  backLayerColor: string;
  frontLayerColor: string;
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export const Loader = ({
  progress,
  size,
  strokeWidth,
  backLayerColor,
  frontLayerColor,
}: LoaderProps) => {
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = r * 2 * Math.PI;

  const animatedProps = useAnimatedProps(() => {
    const a = interpolate(progress.value, [1, 0], [0, Math.PI * 2]);
    const strokeDashoffset = a * r;
    return {
      strokeDashoffset,
    };
  });

  return (
    <Svg
      width={size}
      height={size}
      style={{
        transform: [{ rotateZ: '270deg' }],
      }}>
      <Circle
        stroke={backLayerColor}
        fill="none"
        {...{ strokeWidth, cx, cy, r }}
      />

      <AnimatedCircle
        animatedProps={animatedProps}
        stroke={frontLayerColor}
        fill="none"
        strokeDasharray={`${circumference} ${circumference}`}
        {...{ strokeWidth, cx, cy, r }}
        strokeLinecap="round"
      />
    </Svg>
  );
};
