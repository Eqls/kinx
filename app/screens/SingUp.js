import React from 'react';
import { Actions } from 'react-native-router-flux'
import styled, { consolidateStreamedStyles } from 'styled-components';
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {Register} from './../api/Auth'

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
  margin: 10px 0 0 0;
`;

const ButtonWrapper = styled.View`
  width: 100%;
  padding-top: 10px;
`;

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
      <Container>
        <Text>Join Us</Text>
        <Text>{error}</Text>
        <FormField
          onChangeText={(username) => this.handleChange({username: username})}
          value={user.username}
          placeholder='Enter Your username'
          autoCapitalize='none'
          underlineColorAndroid="transparent"
          textAlign={'center'}
        />
        <FormField
          onChangeText={(password) => this.handleChange({password: password})}
          value={user.password}
          type='password'
          placeholder='Enter Your password'
          autoCapitalize='none'
          underlineColorAndroid="transparent"
          textAlign={'center'}
          secureTextEntry
        />
        <FormField
          onChangeText={(passwordV) => this.handleChange({passwordV: passwordV})}
          value={user.passwordV}
          type='password'
          placeholder='Confirm Your password'
          autoCapitalize='none'
          underlineColorAndroid="transparent"
          textAlign={'center'}
          secureTextEntry
        />
        <ButtonWrapper>
          <Button
            onPress={this.sendSignUpRequest}
            title='Sign Up'
            color="#841584"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            onPress={() => Actions.pop()}
            title='Cancel'
            color="#841584"
          />
        </ButtonWrapper>
      </Container>
    );
  }
}

export default SignUp;