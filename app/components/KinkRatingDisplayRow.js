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

export const KinkRatingDisplayRow = props => (
  <View style={styles.container}>
    {console.log(props.data.rating)}
    <Text style={styles.border}>★・・・・・・★・・・・・・★・・・・・・★</Text>
    <Text style={styles.text}>{props.data.name}</Text>
    <StarRating
      disabled={true}
      maxStars={5}
      fullStar={require("./../icons/filled-heart.png")}
      emptyStar={require("./../icons/empty-heart.png")}
      halfStar={require("./../icons/half-heart.png")}
      rating={props.data.rating}
      starSize={60}
    />
  </View>
);
