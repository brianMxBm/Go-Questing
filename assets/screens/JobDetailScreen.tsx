import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '../../theme/Icons';
import { CARD, SPACING, CARD_HEIGHT } from '../../constants/dimensions';
import { NavigationProp } from '@react-navigation/native';
const styles = StyleSheet.create({
  type: {
    fontWeight: '800',
    fontSize: 22
  },
  subType: {
    fontSize: 12,
    opacity: 0.8
  },
  image: {
    width: CARD.WIDTH * 0.9,
    height: CARD.HEIGHT * 0.9,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute',
    top: CARD_HEIGHT * 0.2
  }
});

export default function JobDetailScreen({ navigation, route }: any) {
  //TODO: Change from any in production
  const { color, image, type } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[StyleSheet.absoluteFillObject, { backgroundColor: color, borderRadius: 16 }]}>
        <Icons.AntDesign
          name="close"
          size={28}
          style={{
            padding: SPACING,
            position: 'absolute',
            top: SPACING,
            right: SPACING,
            zIndex: 2
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={{ alignItems: 'center', top: 50 }}>
          <Text style={styles.type}>{type}</Text>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
    </SafeAreaView>
  );
}
