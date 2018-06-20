import React from 'react';
import {
  Text,
  Platform,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux'
import styled from 'styled-components';
import Stars from 'react-native-stars';
import { KinkRatingRow } from '../components/KinkRatingRow';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '20px 0 0 0' : '0'};
`;

class KinkRating extends React.Component {

  state = {
    ratings: [{
      name: '',
      rating: 1
    }]
  }

  componentDidMount() {
    let ratingObjects = [];
    for (let i = 0; i < this.props.data.length; i++) {
      let ratingObj = {
        name: this.props.data[i].value,
        rating: 1
      }
      ratingObjects.push(ratingObj);
    }
    this.setState({
      ratings: [...ratingObjects]
    })
  }

  handleChange = (val, index) => {
    const {ratings} = this.state;
    let list = [...ratings];
    list[index].rating = val;
    this.setState({
      ratings: [...list]
    });
  }

  render() {
    const { ratings } = this.state;
    return (
      <Container>
        <ScrollView>
          {
            ratings.map((item, index) =>
              <KinkRatingRow
                key={index} 
                index={index} 
                data={item} 
                handleChange={this.handleChange}
              />
            )
          }
        </ScrollView>
      </Container>
    );
  }
}

export default KinkRating;