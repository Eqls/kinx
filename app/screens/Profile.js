import React from "react";
import { View, StyleSheet, Image, Button, AsyncStorage } from "react-native";
import { Actions } from "react-native-router-flux";
import store from "../store";

const { dispatch } = store;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  buttonWrapper: {
    width: "100%",
    paddingTop: 10
  }
});

const yourButtonText = "Manage your KinX";
const guestButtonText = "Submit guest Kinx";
const personalButton = true;
const guestButton = false;
const resultButtonText = "Most Recent Result";

class Profile extends React.Component {
  // state = {
  //   localRating: []
  // };

  // componentDidMount() {
  //   AsyncStorage.getItem("ComparedData").then(token => {
  //     console.log("token", token),
  //       this.setState({
  //         localRating: JSON.parse(token)
  //       });
  //   });
  // }
  componentWillMount() {
    dispatch.kinx.asyncGetLocal();
  }

  onPressPersonal = () => {
    console.log("onpress");
    Actions.kinklist({
      data: yourButtonText,
      personal: personalButton
    });
  };

  onPressGuest = () => {
    console.log("onpressbtn2");
    Actions.kinklist({
      data: guestButtonText,
      personal: guestButton
    });
  };

  onPressResult = () => {
    console.log("onpressbtn3");
    Actions.kinkresults({
      dataName: resultButtonText
      // data: this.state.localRating
    });
    // console.log(this.state.localRating);
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={require("./../icons/wink.png")} />
        <View style={styles.buttonWrapper}>
          <Button
            title={yourButtonText}
            color="#841584"
            onPress={() => this.onPressPersonal()}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title={guestButtonText}
            color="#841584"
            onPress={() => this.onPressGuest()}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title={resultButtonText}
            color="#841584"
            onPress={() => this.onPressResult()}
          />
        </View>
      </View>
    );
  }
}

export default Profile;
