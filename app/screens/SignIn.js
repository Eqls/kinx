import React from 'react';
import {Actions} from 'react-native-router-flux';
import {Login} from './../api/Auth';
import styled from 'styled-components';
import {
  View,
  Text,
  TextInput,
  Button,
  Platform
} from 'react-native';

const Container = styled.View `
  flex: 1;
  padding: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormField = styled.TextInput `
  height: 50px;
  border: 0.5px solid gray;
  border-radius: 3px;
  width: 100%;
  margin: 10px 0 0 0;
`;

const ButtonWrapper = styled.View `
  width: 100%;
  padding-top: 10px;
`;

class SignIn extends React.Component {

  state = {
    error: '',
    done: false,
    user: {
      username: '',
      password: '',
    }
  }

  sendLoginRequest = () => {
    const { user } = this.state;
    Login(user, res => {
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
    const {user, error, done} = this.state;
    if(done) {
      Actions.kinklist();
    }
    return (
      <Container>
        <Text>KINX</Text>
        <Text>{error}</Text>
        <FormField
          onChangeText={(username) => this.handleChange({username: username})}
          value={user.name}
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
        <ButtonWrapper>
          <Button
            onPress={() => this.sendLoginRequest}
            title='Login'
            color="#841584"
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            onPress={() => Actions.signup()}
            title='Sign Up'
            color="#841584"
          />
        </ButtonWrapper>
      </Container>
    );
  }
}

export default SignIn;