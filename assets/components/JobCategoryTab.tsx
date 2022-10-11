import colors from '../../theme/colors';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import { jobCategories } from '../../constants/fakeData';

const styles = StyleSheet.create({
  jobPay: {
    fontWeight: '800',
    color: colors.white
  },
  tab: {
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 15
  },
  tabText: {
    padding: 5,
    fontWeight: '700'
  }
});
interface job {
  category: string;
}

const JobCategoryTab = ({ category }: job) => {
  const [selectedTab, setSelectedTab] = useState(jobCategories[0]);
  return (
    <TouchableOpacity onPress={() => setSelectedTab(category)}>
      <View
        style={[
          styles.tab,
          { backgroundColor: selectedTab === category ? colors.confirm : 'transparent' }
        ]}>
        <Text
          style={[
            styles.tabText,
            { color: selectedTab === category ? colors.black : colors.white }
          ]}>
          {category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default JobCategoryTab;
