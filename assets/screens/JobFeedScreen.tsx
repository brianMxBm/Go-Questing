import React, { useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import colors from '../../theme/colors';
import { CARD } from '../../constants/dimensions';
import jobs, { jobCategories, popularJobs } from '../../constants/fakeData';
import { navigationType } from '../../types';
import JobListItem from '../components/JobListItem';
import JobCard from '../components/JobCard';
import JobCategoryTab from '../components/JobCategoryTab';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
});

export default function JobFeedScreen({ navigation }: navigationType) {
  const [selectedTab, setSelectedTab] = useState(jobCategories[0]);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={{ height: 50 }} />
        <FlatList
          data={jobCategories}
          keyExtractor={(item, index) => `${item}-${index}`}
          horizontal
          contentContainerStyle={{ padding: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedTab(item);
                }}>
                <JobCategoryTab category={item} selectedtab={selectedTab} />
              </TouchableOpacity>
            );
          }}
        />
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          horizontal
          snapToInterval={CARD.FULL_SIZE} // check what this is <---------------
          decelerationRate="fast"
          renderItem={({ item }) => {
            return (
              <JobCard
                image={item.image}
                type={item.type}
                color={item.color}
                navigation={navigation}
              />
            );
          }}></FlatList>
        <FlatList
          data={popularJobs}
          keyExtractor={(item) => item.key}
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          renderItem={({ item }) => {
            return (
              <JobListItem
                image={item.image}
                rating={item.rating}
                pay={item.pay}
                type={item.type}
              />
            );
          }}></FlatList>
      </SafeAreaView>
    </ScrollView>
  );
}
