import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Button
} from 'react-native';
import {Actions} from 'react-native-router-flux'

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

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/avatar.png')}
        />
        <View style={styles.buttonWrapper}>
          <Button
            title='Manage your KinX'
            color='#841584'
            onPress={() => Actions.kinklist()}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title='Sumbit guest Kinx'
            color='#841584'
            onPress={() => Actions.kinklist()}
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