import React from 'react';
<<<<<<< Updated upstream
import {
  View,
  Text
}
from 'react-native';
=======
import { 
  View, 
  Text,
  StyleSheet
} from 'react-native';
>>>>>>> Stashed changes
import Stars from 'react-native-stars';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 5
  },
});

export const KinkRatingRow = props => (
  <View style={styles.container}>
    <Text>{props.data.name}</Text>
    <Stars
      half={props.half}
      rating={props.data.rating}
      update={(val) => {props.handleChange(val, props.index)}}
      spacing={6}
      starSize={50}
      count={5}
      fullStar={require('./../icons/filled-heart.png')}
      emptyStar={require('./../icons/empty-heart.png')}
      // halfStar={require('./../../node_modules/react-native-stars/example-images/starHalf.png')}
    />
    <Text>{props.descs[props.data.rating-1]}</Text>
  </View>
);