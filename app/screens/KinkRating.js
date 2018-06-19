import React from 'react';
import {
  Text,
  Platform
}
from 'react-native';
import styled from 'styled-components';

const Container = styled.View `
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '20px 0 0 0' : '0'};
`;

class KinkRating extends React.Component {

  render() {
    return (
      <Container>
        <Text>XD</Text>
      </Container>
    );
  }
}

export default KinkRating;