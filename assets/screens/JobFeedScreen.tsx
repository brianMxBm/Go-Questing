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
import { faker } from '@faker-js/faker';
import { postJob } from '../../utils/jobActions';
import { JobFeedScreenNavigationProp } from '../../navigation/types/NavTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black
  }
});

interface jobPost {
  postTitle: string;
  description: string;
  compensation: string;
  address: string;
  jobCategory: string;
  location: { type: string; coordinates: number[] };
}

// this function will create the fake data in the database for jobs which can be displayed as markers on the map.
// only run this function once then comment out.
// function getTitle(cat: string) {
//   switch (cat) {
//     case 'auto repair':
//       return 'fix my car';
//     case 'yard work':
//       return 'mow my lawn';
//     case 'plumbing':
//       return 'unclog a drain';
//     case 'paint':
//       return 'paint my house';
//     default:
//       return '';
//   }
// }

// async function superMarioFaker() {
//   for (let i = 0; i < 25; ++i) {
//     // change this value depending on how many markers you would like
//     const tempCategory = faker.helpers.arrayElement([
//       'auto repair',
//       'yard work',
//       'plumbing',
//       'paint'
//     ]);
//     const tempTitle = getTitle(tempCategory);
//     const values: jobPost = {
//       postTitle: tempTitle,
//       description: faker.lorem.lines(),
//       compensation: faker.commerce.price(),
//       jobCategory: tempCategory,
//       address: '',
//       location: {
//         type: 'Point',
//         coordinates: [
//           +faker.address.longitude(-118.493565, -118.562101, 6),
//           +faker.address.latitude(34.257276, 34.228291, 6)
//         ]
//       }
//     };
//     const response = await fetch(
//       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${values.location.coordinates[1]},${values.location.coordinates[0]}&key=YOUR_KEY_HERE`
//     );

//     const data = await response.json();
//     values.address = data.results[0].formatted_address;
//     const res = await postJob(values);
//     console.log(values);
//     console.log(res);
//   }
// }

export default function JobFeedScreen({ navigation }: JobFeedScreenNavigationProp) {
  const [selectedTab, setSelectedTab] = useState(jobCategories[0]);
  //superMarioFaker();
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
