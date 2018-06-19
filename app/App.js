/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SingUpScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Scene hideNavBar key="root">
          <Scene
            key="main"
            component={LoginScreen}
            title="LoginScreen"
            swipeEnabled
            initial
          />
          <Scene
            key="signup"
            component={SignUpScreen}
            title="SignUpScreen"
            swipeEnabled
          />
        </Scene>
      </Router>
    );
  }
}
