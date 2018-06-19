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

class LoginScreen extends React.Component {

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <Container>
        <Text>KINX</Text>
        <FormField
          onChangeText={(username) => this.setState({ username })}
          value={this.state.text}
          placeholder='Enter Your username'
          autoCapitalize='none'
        />
        <FormField
          onChangeText={(password) => this.setState({ password })}
          value={this.state.text}
          type='password'
          placeholder='Enter Your password'
          autoCapitalize='none'
          secureTextEntry
        />
        <Button
          onPress={() => console.log('Login button pressed')}
          title='Login'
          color="#841584"
        />
        <Button
          onPress={() => Actions.signup()}
          title='Sign Up'
          color="#841584"
        />
      </Container>
    );
  }
}

export default LoginScreen;