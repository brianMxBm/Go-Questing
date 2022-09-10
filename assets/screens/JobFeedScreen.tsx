import React, { useState, useEffect } from 'react';
import jobs, { jobCategories, popularJobs } from '../../constants/fakeData';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import colors from '../../theme/colors';
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
    width: 40,
    height: 40,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute'
  }
});

export default function JobFeedScreen() {
  const [selectedTab, setSelectedTab] = useState(jobCategories[0]);
  return (
    <SafeAreaView style={styles.container}>
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
                  { backgroundColor: selectedTab === item ? colors.textColor : 'transparent' }
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
        scrollEnabled={false}
        style={{ flex: 1, padding: 10 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log('hey');
              }}
              style={{ width: 10, height: 10 }}>
              <View style={{ flex: 1, width: 100, height: 100 }}>
                <View style={{ flex: 1, padding: 6 }}>
                  <View
                    style={[
                      StyleSheet.absoluteFillObject,
                      { backgroundColor: colors.white, borderRadius: 20 }
                    ]}></View>
                  <Text style={styles.type}>{item.type}</Text>
                  <Text style={styles.subType}>{item.subType}</Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
      <FlatList
        data={popularJobs}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
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
    </SafeAreaView>
  );
}
