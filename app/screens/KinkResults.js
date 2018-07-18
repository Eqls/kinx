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
import store from "../store";

const { dispatch } = store;

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

class KinkResults extends React.Component {
  state = {
    loadedRating: []
  };

  componentDidMount() {
    let xd = store.getState();
    console.log("res", xd.kinx);
    this.setState({
      loadedRating: xd.kinx
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar text={this.props.dataName} />
        <ScrollView contentContainerStyle={styles.semiContainer}>
          {this.state.loadedRating.map((item, index) => (
            <KinkRatingDisplayRow data={item} key={index} />
          ))}
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button
            title="Finish"
            color="#841584"
            onPress={() => Actions.pop()}
          />
        </View>
      </View>
    );
  }
}

export default KinkResults;
