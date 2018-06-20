import React from 'react';
import { 
  View, 
  StyleSheet, 
  Image 
} from 'react-native';

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
      </View>
    );
  }
}

export default Profile;