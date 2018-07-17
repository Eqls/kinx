import React from "react";
import {
  Text,
  Platform,
  ScrollView,
  Button,
  StyleSheet,
  View,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";
import { KinkRatingRow } from "../components/KinkRatingRow";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
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

class KinkRating extends React.Component {
  state = {
    rating_descs: [
      "Hard limit / Something I won’t do / Turn off",
      "Does nothing for me, but isn’t a limit",
      "I would do it if the other person enjoyed it",
      "Haven’t done it but want to try",
      "Very much into / Something I enjoy / Turn On"
    ],
    ratings: [
      {
        name: "",
        rating: 1,
        value: 0,
        id: 0
      }
    ]
  };

  componentDidMount() {
    let ratingObjects = [];
    for (let i = 0; i < this.props.data.length; i++) {
      let ratingObj = {
        name: this.props.data[i].label,
        rating: 1,
        value: this.props.data[i].value
      };
      ratingObjects.push(ratingObj);
    }
    this.setState({
      ratings: [...ratingObjects]
    });
  }

  handleChange = (val, index) => {
    const { ratings } = this.state;
    let list = [...ratings];
    list[index].rating = val;
    this.setState({
      ratings: [...list]
    });
  };

  onPressPersonal = () => {
    // AsyncStorage.setItem("test", JSON.stringify(this.state.ratings));
    // dispatch.test.replaceState(this.state.ratings);
    dispatch.kinx.save(this.state.ratings);
    console.log(store.getState());
    Actions.popTo("profile");
  };

  onPressGuest = () => {
    console.log("onpressbtn2");
    Actions.kinkcomparison({
      data: this.state.ratings
    });
  };

  render() {
    console.log("props2", this.props.personal);
    const { ratings } = this.state;
    return (
      <View style={styles.container}>
        <NavBar text="Rate your Kinx!" />
        <ScrollView contentContainerStyle={styles.semiContainer}>
          {ratings.map((item, index) => (
            <KinkRatingRow
              key={index}
              index={index}
              data={item}
              descs={this.state.rating_descs}
              handleChange={this.handleChange}
            />
          ))}
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button
            title="Save"
            color="#841584"
            onPress={() =>
              this.props.personal ? this.onPressPersonal() : this.onPressGuest()
            }
          />
        </View>
      </View>
    );
  }
}

export default KinkRating;
