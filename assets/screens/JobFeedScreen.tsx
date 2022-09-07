import React, { useState, useEffect } from 'react';
import { jobCategories, popularJobs } from '../../constants/fakeData';
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
    flex: 1
  },
  flatlist: {
    flexGrow: 0,
    padding: 6
  },
  tab: {
    padding: 6,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  tabText: {
    fontWeight: '700'
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
        data={popularJobs}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row' }}>
              <Image source={item.image} />
              <View>
                <Text>{item.type}</Text>
                <View style={{ flexDirection: 'row' }}>
                  <Icons.AntDesign
                    name="star"
                    size={16}
                    color={colors.boltColor}
                    style={{ marginRight: 6 }}
                  />
                  <Text>{item.rating} </Text>
                </View>
              </View>
            </View>
          );
        }}></FlatList>
    </SafeAreaView>
  );
}
