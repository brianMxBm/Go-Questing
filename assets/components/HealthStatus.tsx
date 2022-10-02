import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../../theme/colors';
import Heart from '../images/svg/Heart.svg';
import Add from '../images/svg/Add.svg';

/*TODO: Create one unified status component for Health, Currency and Energy, and just pass in props for
icon? We'll also need a way to conditional have the logic for each respective status, maybe by having a string as a prop
that will allow us to state what type of function we'll need for the component. 
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  capsuleContainer: {
    flexDirection: 'row',
    position: 'relative',
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: colors.black,
    backgroundColor: colors.setStatus,
    borderRadius: 40,
    padding: 8
  },
  icon: {
    height: 35, //Not the best way to do this.
    width: 40
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default function HealthStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.capsuleContainer}>
        <Heart style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: '900', fontSize: 22 }}>10</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Health Status')}>
          <Add style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
