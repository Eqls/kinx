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
  }
});

const ButtonWrapper = styled.View `
  width: 100%;
`;

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={require('../assets/images/avatar.png')}
        />
        <ButtonWrapper>
          <Button
            title='Manage your KinX'
            color='#841584'
            onPress={() => Actions.kinklist()}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            title='Sumbit guest Kinx'
            color='#841584'
            onPress={() => Actions.kinklist()}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            title='Most Recent Result'
            color='#841584'
            onPress={() => Actions.kinkcomparison()}
          />
        </ButtonWrapper>
      </View>
    );
  }
}

export default Profile;