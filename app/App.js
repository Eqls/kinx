import React, {
  Component
}
from 'react';
import {
  Router,
  Scene,
  Actions
}
from 'react-native-router-flux';
import Login from './screens/Login';
import SignUp from './screens/SingUp';
import KinkList from './screens/KinkList';
import KinkRating from './screens/KinkRating';

type Props = {};
export default class App extends Component < Props > {
  render() {
    return (
      <Router>
        <Scene hideNavBar key="root">
          <Scene
            key="main"
            component={Login}
            title="Login"
            swipeEnabled
            initial
          />
          <Scene
            key="signup"
            component={SignUp}
            title="SignUp"
            swipeEnabled
          />
          <Scene
            key="kinklist"
            component={KinkList}
            title="kinklist"
            swipeEnabled
          />
          <Scene
            key="kinkrating"
            component={KinkRating}
            title="kinkrating"
            swipeEnabled
          />
        </Scene>
      </Router>
    );
  }
}