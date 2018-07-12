import React from 'react';
import {
  View,
  Text,
  StyleSheet
}
from 'react-native';
import Stars from 'react-native-stars';

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    alignItems: 'center'
  },
  border: {
    color: 'purple',
    fontSize: 12
  },
  text: {
    color: 'black',
    fontSize: 16
  }
});

export const KinkRatingRow = props => (
  <View style={styles.container}>
    <Text style={styles.border}>★・・・・・・★・・・・・・★・・・・・・★</Text>
    <Text style={styles.text}>{props.data.name}</Text>
    <Stars
      half={props.half}
      rating={props.data.rating}
      update={(val) => {props.handleChange(val, props.index)}}
      spacing={8}
      starSize={50}
      count={5}
      fullStar={require('./../icons/filled-heart.png')}
      emptyStar={require('./../icons/empty-heart.png')}
      halfStar={require('./../icons/half-heart.png')}
    />
    <Text>{props.descs[props.data.rating-1]}</Text>
  </View>
);