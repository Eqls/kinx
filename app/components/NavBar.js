import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet
}
from 'react-native';
import {
  Actions
}
from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttonWrapper: {
    paddingRight: 25
  },
  textStyle: {
    fontSize: 20,
    color: 'black'
  }
});

export const NavBar = props => (
  <View style={styles.container}>
    <View style={styles.buttonWrapper}>
      <Button
        title='Back'
        color='#841584'
        onPress={()=> Actions.pop()}
      />
    </View>
    <Text style={styles.textStyle}>{props.text}</Text>
    </View>
);

export default NavBar;