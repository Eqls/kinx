import React from 'react';
import {
  Text,
  ScrollView,
  Platform,
  Button
}
from 'react-native';
import {
  Actions
}
from 'react-native-router-flux'
import {
  KinkRatingDisplayRow
}
from '../components/KinkRatingDisplayRow';
import styled from 'styled-components';

const Container = styled.View `
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '20px 0 0 0' : '0'};
`;

const ButtonWrapper = styled.View `
  width: 100%;
`;

class KinkComparison extends React.Component {

  state = {
    calculatedRatings: [{
      name: '',
      rating: 1,
      value: 1,
      id: 0
    }]
  }

  componentDidMount() {
    let calculatedRatingObjects = [];
    let tempuserobjects = [{
        name: 'Examinations (doctor-nurse play/medical scenes)',
        rating: 3,
        value: 2,
        id: undefined
      },
      {
        name: 'Age Play (you play younger)',
        rating: 5,
        value: 1,
        id: undefined
      },
      {
        name: 'Fantasy Rape',
        rating: 2,
        value: 5,
        id: undefined
      },
      {
        name: 'Anal Play/Anal Sex',
        rating: 4,
        value: 7,
        id: undefined
      }, {
        name: 'Lactation (receiving)',
        value: 23,
        rating: 4,
        id: 1
      },
    ]
    for (var i = 0; i < this.props.data.length; i++) {
      for (var e = 0; e < tempuserobjects.length; e++) {
        if (this.props.data[i].value === tempuserobjects[e].value) {
          let calculatedRating = {
            name: this.props.data[i].name,
            rating: (this.props.data[i].rating + tempuserobjects[e].rating) / 2,
            value: this.props.data[i].value,
            id: this.props.data[i].id
          }
          console.log('calculated', calculatedRating);
          calculatedRatingObjects.push(calculatedRating);
        }
        else if (this.props.data[i].id === tempuserobjects[e].id && this.props.data[i].id != undefined && tempuserobjects[e].id != undefined) {
          let calculatedRating = {
            name: this.props.data[i].name + '+' + tempuserobjects[e].name,
            rating: (this.props.data[i].rating + tempuserobjects[e].rating) / 2,
            value: this.props.data[i].value,
            id: this.props.data[i].id
          }
          console.log('idmatch', calculatedRating);
          calculatedRatingObjects.push(calculatedRating);
        }
      }
    }
    this.setState({
      calculatedRatings: [...calculatedRatingObjects]
    })
  }

  render() {
    const {
      calculatedRatings
    } = this.state;
    return (
      <Container>
        <Text>xd</Text>
        <ScrollView>
          {
            calculatedRatings.map((item, index) =>
              <KinkRatingDisplayRow
                half={true}
                data={item}
                key={index}
              />
            )
          }
        </ScrollView>
        <ButtonWrapper>
          <Button
            title='Finish'
            color='#841584'
            onPress={() => Actions.popTo('main')}
          />
        </ButtonWrapper>
      </Container>
    );
  }
}

export default KinkComparison;