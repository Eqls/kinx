import React from 'react';
import { Actions } from 'react-native-router-flux'
import styled from 'styled-components';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';

const Container = styled.View`
  flex: 1;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormField = styled.TextInput`
  height: 50px;
  border: 0.5px solid gray;
  border-radius: 3px;
  width: 100%;
  margin: 15px 0 0 0;
  padding: 5px;
`;

class SignUp extends React.Component {

  state = {
    username: '',
    password: '',
    passowrdV: ''
  }

  render() {
    return (
      <Container>
        <Text>Join Us</Text>
        <FormField
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          placeholder='Enter Your username'
          autoCapitalize='none'
        />
        <FormField
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          type='password'
          placeholder='Enter Your password'
          autoCapitalize='none'
          secureTextEntry
        />
        <FormField
          onChangeText={(passwordV) => this.setState({ passwordV })}
          value={this.state.passwordV}
          type='password'
          placeholder='Confirm Your password'
          autoCapitalize='none'
          secureTextEntry
        />
        <Button
          title='Sign Up'
          color="#841584"
        />
        <Button
          onPress={() => Actions.pop()}
          title='Cancel'
          color="#841584"
        />
      </Container>
    );
  }
}

export default SignUp;