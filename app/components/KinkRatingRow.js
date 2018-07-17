import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    alignItems: "center"
  },
  border: {
    color: "purple",
    fontSize: 12
  },
  text: {
    color: "black",
    fontSize: 16
  }
});

export const KinkRatingRow = props => (
  <View style={styles.container}>
    <Text style={styles.border}>★・・・・・・★・・・・・・★・・・・・・★</Text>
    <Text style={styles.text}>{props.data.name}</Text>
    <StarRating
      disabled={false}
      maxStars={5}
      fullStar={require("./../icons/filled-heart.png")}
      emptyStar={require("./../icons/empty-heart.png")}
      halfStar={require("./../icons/half-heart.png")}
      rating={props.data.rating}
      selectedStar={val => {
        props.handleChange(val, props.index);
      }}
      starSize={60}
    />
    <Text>{props.descs[props.data.rating - 1]}</Text>
  </View>
);
