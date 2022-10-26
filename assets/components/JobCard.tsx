import colors from '../../theme/colors';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icons } from '../../theme/Icons';
import { faker } from '@faker-js/faker';
import { CARD } from '../../constants/dimensions';
import { profilePicture } from '../../theme/images';
import { NavigationProp } from '@react-navigation/native';

const styles = StyleSheet.create({
  jobPay: {
    fontWeight: '800',
    color: colors.white
  },
  imageFrame: {
    flex: 1
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: 'hidden',
    alignItems: 'center'
  },
  type: {
    fontWeight: '800',
    fontSize: 22
  },
  active: {
    backgroundColor: colors.confirm,
    position: 'absolute',
    bottom: 7,
    right: 15,
    borderWidth: 1,
    padding: 4,
    height: 12,
    width: 12,
    borderRadius: 10
  },
  image: {
    width: CARD.WIDTH * 0.75,
    height: CARD.HEIGHT,
    alignSelf: 'center',
    resizeMode: 'contain',
    position: 'absolute'
  }
});

interface jobs {
  image: string;
  type: string;
  color: string;
  navigation: NavigationProp<any, any>;
}

const JobCard = ({ image, type, color, navigation }: jobs) => {
  return (
    <TouchableOpacity
      style={{ width: CARD.WIDTH, height: CARD.HEIGHT, padding: 10 }}
      onPress={() => {
        navigation.navigate('Details', { item: { image, type, color } });
      }}>
      <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
        <View
          style={[StyleSheet.absoluteFillObject, { backgroundColor: color, borderRadius: 16 }]}
        />
        <View style={{ position: 'absolute', top: 10, left: 10, margin: 10 }}>
          <Text numberOfLines={1} style={styles.type}>
            {type}
          </Text>
          <View style={{ flexDirection: 'column', paddingTop: 5 }}>
            <View
              style={{
                flexDirection: 'row'
              }}>
              <Icons.AntDesign
                name="eye"
                size={25}
                color={colors.black} //TODO: Create dedicated color schemes for icons.
                style={{ paddingRight: 5 }}
              />
              <Text style={styles.type}>{faker.random.numeric(4)}</Text>
            </View>
          </View>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
        <View
          style={{
            //position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: -150 //TODO: Change this. It's extreamly bad practivece
          }}>
          <Text style={styles.type}>Brian Melgar</Text>
          <View style={styles.profileImage}>
            <Image source={profilePicture} style={styles.imageFrame} resizeMode="center"></Image>
          </View>
          <View style={styles.active} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
