import colors from '../../theme/colors';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
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
  selectedtab: string;
}

const JobCategoryTab = ({ category, selectedtab }: job) => {
  return (
    <View
      style={[
        styles.tab,
        { backgroundColor: selectedtab === category ? colors.confirm : 'transparent' }
      ]}>
      <Text
        style={[styles.tabText, { color: selectedtab === category ? colors.black : colors.white }]}>
        {category}
      </Text>
    </View>
  );
};

export default JobCategoryTab;
