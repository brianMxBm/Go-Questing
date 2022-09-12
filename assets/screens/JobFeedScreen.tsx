import React, { useState } from 'react';
import jobs, { jobCategories, popularJobs } from '../../constants/fakeData';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView
} from 'react-native';
import colors from '../../theme/colors';
import { CARD, CARD_WIDTH } from '../../constants/dimensions';
import { Icons } from '../../theme/Icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  flatlist: {
    flexGrow: 0,
    padding: 6
  },
  tab: {
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  tabText: {
    padding: 5,
    fontWeight: '700'
  },
  jobImage: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
    marginRight: 6
  },
  jobType: {
    fontWeight: '800',
    fontSize: 16,
    color: colors.white
  },
  jobPay: {
    fontWeight: '800',
    color: colors.white
  },
  type: {
    fontWeight: '800',
    fontSize: 22
  },
  subType: {
    fontSize: 12,
    opacity: 0.8
  },
  image: {
    width: CARD_WIDTH * 0.64,
    height: CARD.HEIGHT,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute'
  },
  pictureContainer: {}
});

export default function JobFeedScreen() {
  const [selectedTab, setSelectedTab] = useState(jobCategories[0]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          data={jobCategories}
          keyExtractor={(item, index) => `${item}-${index}`}
          horizontal
          style={styles.flatlist}
          contentContainerStyle={{ padding: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setSelectedTab(item)}>
                <View
                  style={[
                    styles.tab,
                    { backgroundColor: selectedTab === item ? colors.confirm : 'transparent' }
                  ]}>
                  <Text
                    style={[
                      styles.tabText,
                      { color: selectedTab === item ? colors.black : colors.white }
                    ]}>
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={CARD.FULL_SIZE}
          decelerationRate="fast"
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{ width: CARD.WIDTH, height: CARD.HEIGHT, padding: 10 }}
                onPress={() => {
                  console.log('hey');
                }}>
                <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      { backgroundColor: item.color, borderRadius: 16 }
                    ]}
                  />
                  <View style={{ position: 'absolute', top: 10, left: 10, margin: 10 }}>
                    <Text style={styles.type}>{item.type}</Text>
                    <Text style={styles.subType}>{item.subType}</Text>
                  </View>
                  <Image source={{ uri: item.image }} style={styles.image} />
                  <View style={{ position: 'absolute', bottom: 10, flexDirection: 'row' }}>
                    <Text style={styles.type}>asffasf</Text>
                    <View style={styles.pictureContainer}></View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
        <FlatList
          data={popularJobs}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 6 }}>
                <Image style={styles.jobImage} source={{ uri: item.image }} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.jobType}>{item.type}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Icons.AntDesign
                      name="star"
                      size={16}
                      color={colors.boltColor}
                      style={{ marginRight: 6 }}
                    />
                    <Text style={{ fontWeight: '700', color: colors.white }}>{item.rating} </Text>
                  </View>
                </View>
                <Text style={styles.jobPay}>{item.pay}</Text>
              </View>
            );
          }}></FlatList>
      </ScrollView>
    </SafeAreaView>
  );
}
