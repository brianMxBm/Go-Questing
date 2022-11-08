import { View, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { WIN_WIDTH, HEIGHT } from '../../constants/dimensions';
import { getUserLocation } from '../../features/location/locationService';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import mapStyle from '../../theme/mapStyle';
import HealthStatus from '../components/HealthStatus';
import CoinStatus from '../components/CoinStatus';
import SwitchMap from '../components/SwitchMap';
import CenterBox from '../components/CenterBox';
import { getJobs } from '../../features/jobs/jobsSlice';
import { profilePicture } from '../../theme/images';

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
    bottom: 80,
    right: 15
  },
  centerbox: {
    position: 'absolute',
    top: 80,
    right: 20
  }
});

export default function MapScreen() {
  const dispatch = useAppDispatch();

  const { location } = useAppSelector((state) => state.location);
  const { mapCenterLocation } = useAppSelector((state) => state.map);
  const { jobs, isLoading } = useAppSelector((state) => state.jobs);

  const fetchJobs = async (latitude: number, longitude: number) => {
    dispatch(getJobs({ latitude, longitude }));
  };

  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) {
      dispatch(getUserLocation());
    } else {
      const { latitude, longitude } = location;
      fetchJobs(latitude, longitude);
    }
  }, [location]);

  if (!location || isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
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
          latitude: mapCenterLocation.latitude ? mapCenterLocation.latitude : location.latitude,
          longitude: mapCenterLocation.longitude ? mapCenterLocation.longitude : location.longitude,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0121
        }}>
        {jobs.map((job, index: number) => (
          <Marker
            key={index}
            coordinate={{
              latitude: job.location.coordinates[1],
              longitude: job.location.coordinates[0]
            }}
            image={profilePicture}
          />
        ))}
      </MapView>
      <View style={styles.statusContainer}>
        <HealthStatus />
      </View>
      <View style={styles.statusContainerTwo}>
        <CoinStatus />
      </View>
      <View style={styles.switchSign}>
        <SwitchMap />
      </View>
      <View style={styles.centerbox}>
        <CenterBox />
      </View>
    </View>
  );
}
