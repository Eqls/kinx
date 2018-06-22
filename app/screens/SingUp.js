import React from 'react';
import { Actions } from 'react-native-router-flux'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import {Register} from './../api/Auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  formField: {
    height: 50,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 3,
    width: '100%',
    marginTop: 10
  },
  buttonWrapper: {
    width: '100%',
    height: 40,
    paddingTop: 10
  }
});

class SignUp extends React.Component {

  state = {
    error: '',
    done: false,
    user: {
      username: '',
      password: '',
      passwordV: ''
    }
  }

  sendSignUpRequest = () => {
    const { user } = this.state;
    Register(user, res => {
      this.setState({
        ...res
      });
    });
  }

  handleChange = (data) => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        ...data
      }
    })
  }

  render() {
    const { loaded, error, user, done } = this.state;
    if (done) {
      Actions.kinklist();
    }
    return (
      <View style={styles.container}>
        <Text>Join Us</Text>
        <Text>{error}</Text>
        <TextInput
          style={styles.formField}
          onChangeText={(username) => this.handleChange({username: username})}
          value={user.username}
          placeholder='Enter Your username'
          autoCapitalize='none'
          underlineColorAndroid="transparent"
          textAlign={'center'}
        />
        <TextInput
          style={styles.formField}
          onChangeText={(password) => this.handleChange({password: password})}
          value={user.password}
          type='password'
          placeholder='Enter Your password'
          autoCapitalize='none'
          underlineColorAndroid="transparent"
          textAlign={'center'}
          secureTextEntry
        />
        <TextInput
          style={styles.formField}
          onChangeText={(passwordV) => this.handleChange({passwordV: passwordV})}
          value={user.passwordV}
          type='password'
          placeholder='Confirm Your password'
          autoCapitalize='none'
          underlineColorAndroid="transparent"
          textAlign={'center'}
          secureTextEntry
        />
        <View style={styles.buttonWrapper}>
          <Button
            onPress={this.sendSignUpRequest}
            title='Sign Up'
            color="#841584"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => Actions.pop()}
            title='Cancel'
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

export default SignUp;