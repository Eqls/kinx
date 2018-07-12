import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button
}
from 'react-native';
import {
  Actions
}
from 'react-native-router-flux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  buttonWrapper: {
    width: '100%',
    paddingTop: 10
  }
});

const yourButtonText = 'Manage your KinX';
const guestButtonText = 'Submit guest Kinx';
const personalButton = true;
const guestButton = false

class Profile extends React.Component {

  onPressPersonal = () => {
    console.log('onpress');
    Actions.kinklist({
      data: yourButtonText,
      personal: personalButton
    })
  }

  onPressGuest = () => {
    console.log('onpressbtn2');
    Actions.kinklist({
      data: guestButtonText,
      personal: guestButton
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/avatar.png')}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title= {yourButtonText}
            color='#841584'
            onPress={() => this.onPressPersonal()}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title= {guestButtonText}
            color='#841584'
            onPress={() => this.onPressGuest()}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='Most Recent Result'
            color='#841584'
            onPress={() => Actions.kinkcomparison()}
          />
        </View>
      </View>
    );
  }
}

export default Profile;