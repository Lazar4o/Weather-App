import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

const PlusIcon = ({size = 22, color = 'black'}) => (
  <View>
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none" />
      <Rect x="11" y="5" width="2" height="14" fill={color} />
      <Rect x="5" y="11" width="14" height="2" fill={color} />
    </Svg>
  </View>
);

export default PlusIcon;