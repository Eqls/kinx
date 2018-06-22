import React from 'react';
import {
  Text,
  Platform,
  ScrollView,
  Button
}
from 'react-native';
import {
  Actions
}
from 'react-native-router-flux'
import styled from 'styled-components';
import Stars from 'react-native-stars';
import {
  KinkRatingRow
}
from '../components/KinkRatingRow';

const ButtonWrapper = styled.View `
  width: 100%;
`;

const Container = styled.View `
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '20px 0 0 0' : '0'};
`;

class KinkRating extends React.Component {

  state = {
    ratings: [{
      name: '',
      rating: 1,
      value: 0,
      id: 0
    }]
  }

  componentDidMount() {
    let ratingObjects = [];
    console.log(this.props.data);
    for (let i = 0; i < this.props.data.length; i++) {
      let ratingObj = {
        name: this.props.data[i].label,
        rating: 1,
        value: this.props.data[i].value,
        id: this.props.data[i].id
      }
      ratingObjects.push(ratingObj);
    }
    this.setState({
      ratings: [...ratingObjects]
    })
  }

  handleChange = (val, index) => {
    const {
      ratings
    } = this.state;
    let list = [...ratings];
    list[index].rating = val;
    this.setState({
      ratings: [...list]
    });
  }

  render() {
    const {
      ratings
    } = this.state;
    return (
      <Container>
        <ScrollView>
          {
            ratings.map((item, index) =>
              <KinkRatingRow
                half={false}
                key={index}
                index={index}
                data={item}
                handleChange={this.handleChange}
              />
            )
          }
        </ScrollView>
        <ButtonWrapper>
          <Button
            title='Save'
            color='#841584'
            onPress={() => Actions.kinkcomparison({data: this.state.ratings})}
          />
        </ButtonWrapper>
      </Container>
    );
  }
}

export default KinkRating;