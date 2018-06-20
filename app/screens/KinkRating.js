import React from 'react';
import {
  Text,
  Platform
}
from 'react-native';
import styled from 'styled-components';
import Stars from 'react-native-stars';

const Container = styled.View `
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '20px 0 0 0' : '0'};
`;

const itemweget = ['hehexd', 'dsaas', 'aasasasas'];
const ratingObjects = [];

for (var i = 0; i < itemweget.length; i++) {
  var ratingObj = {
    nameofKink: itemweget[i],
    rating: 1
  }
  ratingObjects.push(ratingObj);
}

class KinkRating extends React.Component {

  render() {
    return (
      <Container>
        <Text>Rate your Kinx</Text>
        <Stars
            half={false}
            rating={3}
            update={(val)=>{this.setState({stars: val})}}
            spacing={6}
            starSize={50}
            count={5}
            fullStar={require('./../icons/filled-heart.png')}
            emptyStar={require('./../icons/empty-heart.png')}
          />

      </Container>
    );
  }
}

export default KinkRating;