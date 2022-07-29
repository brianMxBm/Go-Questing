import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../../theme/mapStyle';
import { WIN_WIDTH, HEIGHT } from '../../constants/dimensions';
import { getUserLocation } from '../../redux/actions/locationAction';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CenterBox from '../components/CenterBox';

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  mapView: {
    width: WIN_WIDTH,
    height: '100%'
  },
  centerContainer: {
    position: 'absolute',
    paddingVertical: HEIGHT * 0.1,
    paddingHorizontal: 15,
    right: 0
  }
});

export default function MapScreen() {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector((state) => state.location);

  useEffect(() => {
    if (location.latitude == 0) {
      dispatch(getUserLocation());
    }
  }, [location, dispatch]);

  if (!location) {
    return <Text>Loading..</Text>;
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapView}
        showsMyLocationButton={false}
        showsUserLocation
        customMapStyle={mapStyle}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0121
        }}
      />
      <View style={styles.centerContainer}>
        <CenterBox />
      </View>
    </View>
  );
}
