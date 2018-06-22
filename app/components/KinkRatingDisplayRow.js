import React from 'react';
import {
  View,
  Text
}
from 'react-native';
import Stars from 'react-native-stars';

export const KinkRatingDisplayRow = props => (
  <View>
    <Text>{props.data.name}</Text>
    <Stars
      half={props.half}
      value={props.data.rating}
      spacing={6}
      count={5}
      starSize={50}
      backingColor='transparent'
      fullStar={require('./../icons/filled-heart.png')}
      emptyStar={require('./../icons/empty-heart.png')}
      // halfStar={require('./../../node_modules/react-native-stars/example-images/starHalf.png')}
    />
  </View>
);