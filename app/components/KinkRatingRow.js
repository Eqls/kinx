import React from 'react';
import { 
  View, 
  Text 
} from 'react-native';
import Stars from 'react-native-stars';

export const KinkRatingRow = props => (
  <View>
    <Text>{props.data.name}</Text>
    <Stars
      half={false}
      rating={props.data.rating}
      update={(val) => {props.handleChange(val, props.index)}}
      spacing={6}
      starSize={50}
      count={5}
      fullStar={require('./../icons/filled-heart.png')}
      emptyStar={require('./../icons/empty-heart.png')}
    />
  </View>
);