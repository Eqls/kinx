import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Stars from "react-native-stars";

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
    <Stars
      value={1.5}
      half={true}
      spacing={8}
      count={5}
      starSize={50}
      backingColor="transparent"
      fullStar={require("./../icons/filled-heart.png")}
      emptyStar={require("./../icons/empty-heart.png")}
      halfStar={require("./../icons/half-heart.png")}
    />
  </View>
);
