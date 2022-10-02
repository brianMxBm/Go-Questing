import React, { useRef, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, View, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import { WIDTH } from '../../constants/dimensions';
import colors from '../../theme/colors';
import { Icons } from '../../theme/Icons';
import { profileIcon } from '../../theme/images';
import ProfileCircle from './ProfileCircle';

const HEIGHT = 250;

interface CardType {
  images: string[];
  title: string;
  onPress?: () => any;
  tagline: string;
  price: number;
  style?: any;
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    width: WIDTH,
    height: WIDTH - 50,
    borderRadius: 10
  },
  favoriteContainer: {
    position: 'absolute',
    top: 10,
    right: 35,
    zIndex: 10,
    padding: 10
  },
  textContainer: {},
  imageContainer: { justifyContent: 'center', alignItems: 'center', width: WIDTH - 60 },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: 10
  },
  dotContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: HEIGHT - 10,
    alignSelf: 'center'
  },
  starContainer: {
    flexDirection: 'row'
  },
  dot: {
    width: 5,
    height: 5,
    margin: 3,
    borderRadius: 30,
    backgroundColor: 'white'
  },
  heading: {
    fontSize: 20
  },
  price: {
    fontSize: 18,
    marginTop: 5
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 30
  }
});
export default function Card({ images, price, tagline, title, onPress, style }: CardType) {
  const viewConfigRef = { viewAreaCoveragePercentThreshold: 95 };
  const flatListRef = useRef<FlatList | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  //const [favorite, setFavorite] = useState<Boolean>(some_prop_idk)
  const onViewedRef = useRef(({ changed }: { changed: any }) => {
    if (changed[0].isViewable) {
      setActiveIndex(changed[0].index);
    }
  });

  return (
    <Surface
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        borderRadius: 20,
        marginBottom: 20
      }}>
      <Pressable onPress={onPress} style={styles.textContainer}>
        <View style={styles.starContainer}>
          <Icons.AntDesign
            name="star"
            size={16}
            color={colors.boltColor}
            style={{ marginRight: 6 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </Pressable>
      <View style={[styles.cardContainer]}>
        <Pressable style={styles.favoriteContainer} onPress={() => console.log('Hey')}>
          <Icons.EvilIcons name="exclamation" size={45} />
        </Pressable>
        <FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ref={(ref) => (flatListRef.current = ref)}
          snapToAlignment="center"
          pagingEnabled
          viewabilityConfig={viewConfigRef}
          onViewableItemsChanged={onViewedRef.current}
          renderItem={({ item }) => (
            <Pressable onPress={onPress} style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item }} />
            </Pressable>
          )}
        />
        {images.length > 1 && (
          <View style={styles.dotContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  {
                    opacity: index === activeIndex ? 1 : 0.5
                  },
                  styles.dot
                ]}
              />
            ))}
          </View>
        )}
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>Brian Melgar</Text>
        </View>
      </View>
    </Surface>
  );
}
