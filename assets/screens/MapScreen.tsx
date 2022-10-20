import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { WIN_WIDTH, HEIGHT } from '../../constants/dimensions';
import { getUserLocation } from '../../redux/actions/locationAction';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import mapStyle from '../../theme/mapStyle';
import HealthStatus from '../components/HealthStatus';
import CoinStatus from '../components/CoinStatus';
import SwitchMap from '../components/SwitchMap';
import CenterBox from '../components/CenterBox';
import { getJobs } from '../../utils/jobActions';
import { profileIcon } from '../../constants/icons';
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
async function getjobs(latitude: number, longitude: number) {
  const jobs = await getJobs(latitude, longitude);
  return jobs;
}

export default function MapScreen() {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector((state) => state.location);
  const { mapCenterLocation } = useAppSelector((state) => state.map);
  const [jobs, setJobs] = useState<any>([]);
  useEffect(() => {
    if (location.latitude == 0) {
      dispatch(getUserLocation());
      setJobs(getJobs(location.latitude, location.longitude));
      console.log(jobs);
    }
  }, [location, dispatch, jobs]);

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
          latitude: mapCenterLocation.latitude ? mapCenterLocation.latitude : location.latitude,
          longitude: mapCenterLocation.longitude ? mapCenterLocation.longitude : location.longitude,
          latitudeDelta: 0.0015,
          longitudeDelta: 0.0121
        }}>
        {/* {jobs &&
          jobs.map((job: any, index: number) => (
            <Marker
              key={index}
              coordinate={{
                latitude: job.location.latitude,
                longitude: job.location.longitude
              }}
              image={profileIcon}
            />
          ))} */}
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
