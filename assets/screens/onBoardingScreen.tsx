import React, { useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Animated, Image, Dimensions, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WIDTH } from '../../constants/dimensions';
import colors from '../../theme/colors';
import { DATA } from '../../constants/slides';
import Indicator from '../components/Indicator';
import BackDrop from '../components/BackDrop';
import Square from '../components/Square';
import { navigationType } from '../../types';
import NextButton from '../components/NextButton';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function OnBoarding({ navigation }: navigationType) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<any>(null); //TODO: Change Type

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    //TODO: Change Type
    setCurrentPage(viewableItems[0].index);
  }).current;

  const scrollNext = async () => {
    if (currentPage < DATA.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentPage + 1 });
    } else {
      navigation.navigate('Register');
    }
    try {
      await AsyncStorage.setItem('@TutorialViewed', 'true');
    } catch (err) {
      console.log(err); //TODO: Implement actual error handling.
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        ref={slidesRef}
        scrollEventThrottle={32}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={viewableItemsChanged}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
          useNativeDriver: false
        })}
        showsHorizontalScrollIndicator={false}
        //contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: 'center', padding: 20 }}>
              <View style={{ flex: 0.7, justifyContent: 'center' }}>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: WIDTH / 1.6,
                    height: WIDTH / 1.6,
                    resizeMode: 'contain',
                    bottom: 20
                  }}
                />
              </View>
              <View style={{ flex: 0.3 }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 28,
                    marginBottom: 10,
                    color: colors.black
                  }}>
                  {item.title}
                </Text>
                <Text style={{ color: colors.white, fontWeight: '800' }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <NextButton scrollTo={scrollNext} percentage={(currentPage + 1) * (100 / DATA.length)} />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

export default OnBoarding;
