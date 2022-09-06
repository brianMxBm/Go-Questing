import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import mapStyle from '../../theme/mapStyle';
import { WIN_WIDTH, HEIGHT } from '../../constants/dimensions';
import { getUserLocation } from '../../redux/actions/locationAction';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import CenterBox from '../components/CenterBox';
import HealthStatus from '../components/HealthStatus';
import CoinStatus from '../components/CoinStatus';
import SwitchMap from '../components/SwitchMap';

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
    paddingVertical: HEIGHT * 0.2,
    paddingHorizontal: 15,
    right: 0
  },
  statusContainer: {
    //TODO: BAD PRACTIVE. Refactor to allow status components take in the style prop to invidiually style it.
    position: 'absolute',
    flexDirection: 'column',
    top: 60,
    paddingHorizontal: 10
  },
  statusContainerTwo: {
    //TODO: BAD PRACTIVE. Refactor to allow status components take in the style prop to invidiually style it.
    position: 'absolute',
    flexDirection: 'column',
    top: 125,
    paddingHorizontal: 10
  },
  switchSign: {
    position: 'absolute',
    bottom: -5,
    right: 15
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
      <View style={styles.statusContainer}>
        <HealthStatus />
      </View>
      <View style={styles.statusContainerTwo}>
        <CoinStatus />
      </View>
      <View style={styles.switchSign}>
        <SwitchMap />
      </View>
    </View>
  );
}
