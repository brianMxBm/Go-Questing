import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BlurMask, Canvas, RoundedRect, SweepGradient, vec } from '@shopify/react-native-skia';
import colors from '../../theme/colors';

interface BackgroundGradientType {
  width: number;
  height: number;
}

export default function BackgroundGradient({ width, height }: BackgroundGradientType) {
  const canvasPadding = 40;

  return (
    <Canvas style={{ width: width + canvasPadding, height: height + canvasPadding }}>
      <RoundedRect
        x={canvasPadding / 2}
        y={canvasPadding / 2}
        width={width}
        height={height}
        color={colors.white}
        r={20}>
        <SweepGradient
          c={vec((width + canvasPadding) / 2, (height + canvasPadding) / 2)}
          colors={[colors.textColor, colors.confirm, colors.links, colors.textColor]}
        />
        <BlurMask blur={5} style={'solid'} />
      </RoundedRect>
    </Canvas>
  );
}
