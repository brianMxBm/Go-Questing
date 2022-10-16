import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../../theme/colors';
import Coin from '../images/svg/Coin.svg';
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
    width: 30
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5
  }
});

/*
TODO: Integrate coin system, I beleive that basic counter functions will suffice integrated with the backend (DB). Simple functions
to add coins and maybe even implementing a way for user's to buy coins with real money (NOT VIP).
*/

export default function CoinStatus() {
  return (
    <View style={styles.container}>
      <View style={styles.capsuleContainer}>
        <Coin style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: '900', fontSize: 22 }}>200</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Coin Status')}>
          <Add style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
