import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon, { Icons } from '../../theme/Icons';
import { setMapCenterLocation } from '../../redux/actions/mapAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  box: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'black',
    alignItems: 'center'
  }
});

export default function CenterBox() {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector((state) => state.location);

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => dispatch(setMapCenterLocation(location.latitude, location.longitude))}>
      <Icon type={Icons.MaterialIcons} color={colors.white} size={25} name="navigation" />
    </TouchableOpacity>
  );
}
