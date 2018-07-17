import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import KinkList from "./screens/KinkList";
import KinkRating from "./screens/KinkRating";
import KinkComparison from "./screens/KinkComparison";
import Profile from "./screens/Profile";

// import { Provider } from "react-redux";
// import store from "./store";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <Scene hideNavBar key="root">
          <Scene
            key="main"
            component={SignIn}
            title="SignIn"
            swipeEnabled
            initial
          />
          <Scene key="signup" component={SignUp} title="SignUp" swipeEnabled />
          <Scene
            key="profile"
            component={Profile}
            title="Profile"
            // swipeEnabled
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
          <Scene
            key="kinkcomparison"
            component={KinkComparison}
            title="kinkcomparison"
            swipeEnabled
          />
        </Scene>
      </Router>
      // </Provider>
    );
  }
}
