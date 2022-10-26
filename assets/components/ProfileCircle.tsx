import React from 'react';
import { View, Image, Text, ImageResizeMode, ImageSourcePropType, ImageStyle } from 'react-native';

interface ProfileCircleType {
  isPicture: boolean;
  URLPicture?: string;
  resizeMode?: ImageResizeMode;
  requirePicture: ImageSourcePropType;
  userName?: string;
  width?: number;
  height: number;
  shape: string;
  pictureStyle?: ImageStyle;
}

export default function ProfileCircle({
  isPicture,
  shape,
  pictureStyle,
  requirePicture,
  URLPicture,
  resizeMode,
  userName,
  width,
  height
}: ProfileCircleType) {
  const getUserInitial = () => {
    const firstLetters: string[] = [];
    const words = userName!.split(' ');
    words.map((word) => firstLetters.push(word[0]));
    return firstLetters.map((firstLetter) => firstLetter);
  };

  if (isPicture) {
    return (
      <Image
        source={requirePicture !== null ? requirePicture : { uri: URLPicture }}
        style={[
          { width, height, resizeMode: resizeMode },
          shape === 'circle' && { borderRadius: 100 },
          shape === 'rounded' && { borderRadius: 15 },
          pictureStyle
        ]}
      />
    );
  } else {
    return (
      <View
        style={[
          shape === 'circle' && { borderRadius: 100 },
          shape === 'rounded' && { borderRadius: 15 },
          {
            width,
            height,
            justifyContent: 'center',
            alignItems: 'center'
          }
        ]}>
        {userName && <Text style={[{ fontSize: 16 }]}>{getUserInitial()}</Text>}
      </View>
    );
  }
}
