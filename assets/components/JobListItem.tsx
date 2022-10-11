import colors from '../../theme/colors';
import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import { Icons } from '../../theme/Icons';

const styles = StyleSheet.create({
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
  }
});
interface jobs {
  image: string;
  type: string;
  rating: string;
  pay: string;
}
const JobListItem = ({ image, type, rating, pay }: jobs) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 6 }}>
      <Image style={styles.jobImage} source={{ uri: image }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.jobType}>{type}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Icons.AntDesign
            name="star"
            size={16}
            color={colors.boltColor}
            style={{ marginRight: 6 }}
          />
          <Text style={{ fontWeight: '700', color: colors.white }}>{rating} </Text>
        </View>
      </View>
      <Text style={styles.jobPay}>{pay}</Text>
    </View>
  );
};

export default JobListItem;
