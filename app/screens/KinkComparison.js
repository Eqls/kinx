import React from "react";
import {
  Text,
  ScrollView,
  Platform,
  Button,
  StyleSheet,
  View,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import { KinkRatingDisplayRow } from "../components/KinkRatingDisplayRow";
import NavBar from "../components/NavBar";
// import { connect } from "react-redux";
import store from "../store";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "white"
  },
  semiContainer: {
    alignItems: "center"
  },
  buttonWrapper: {
    width: "100%"
  }
});

class KinkComparison extends React.Component {
  state = {
    calculatedRatings: []
  };
  //
  // getData = async () => {
  //   console.log('async called');
  //   AsyncStorage.getItem('test').then((data) => this.setState({
  //     yourKinx: data
  //   }))
  //   console.log(this.state.yourKinx);
  // }

  componentDidMount() {
    let kinxFromStore = store.getState();
    let xxx = [...kinxFromStore.kinx];
    let calculatedRatingObjects = [];
    for (var i = 0; i < this.props.data.length; i++) {
      console.log("started loop", xxx.length);
      for (var e = 0; e < xxx.length; e++) {
        if (this.props.data[i].name === xxx[e].name) {
          let currentRating =
            Platform.OS === "ios"
              ? (this.props.data[i].rating + xxx[e].rating) / 2
              : (this.props.data[i].rating + xxx[e].rating) / 2 - 1;
          let calculatedRating = {
            name: this.props.data[i].name,
            rating: currentRating,
            value: this.props.data[i].value
          };
          console.log("calculated", calculatedRating);
          calculatedRatingObjects.push(calculatedRating);
        }
      }
      this.setState({
        calculatedRatings: [...calculatedRatingObjects]
      });
    }
  }

  render() {
    const { calculatedRatings } = this.state;
    return (
      <View style={styles.container}>
        <NavBar text="Results" />
        <ScrollView contentContainerStyle={styles.semiContainer}>
          {calculatedRatings.map((item, index) => (
            <KinkRatingDisplayRow data={item} key={index} half={true} />
          ))}
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button
            title="Finish"
            color="#841584"
            onPress={() => Actions.popTo("profile")}
          />
        </View>
      </View>
    );
  }
}

export default KinkComparison;
