import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import Bolt from '../images/svg/Bolt.svg';
import Add from '../images/svg/Add.svg';
import Stamina from '../images/svg/Stamina.svg';

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
    width: 30
  },
  energy: {
    flexDirection: 'row'
  }
});

/*
TODO: Integrate energy system with an array, in the JSX we'll map through them and conditionally
render the pill as filled in or not depending on the user's energy status from the backend (Database).
const Energy = [{
  energy:
}]
*/

export default function EnergyStatus() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.capsuleContainer} //TODO: Add a gradient.
        onPress={() => console.log('Health Status')}>
        <Bolt style={styles.icon} />
        <View style={styles.energy}>
          <Stamina style={styles.icon} />
          <Stamina style={styles.icon} />
          <Stamina style={styles.icon} />
        </View>
        <Add style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
