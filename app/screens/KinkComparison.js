import React from 'react';
import {
  Text,
  ScrollView,
  Platform,
  Button,
  StyleSheet,
  View
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
import NavBar from '../components/NavBar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: 'white'
  },
  semiContainer: {
    alignItems: 'center',
  },
  buttonWrapper: {
    width: '100%'
  }
});

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
      },
      {
        name: 'Age Play (you play younger)',
        rating: 5,
        value: 1,
      },
      {
        name: 'Fantasy Rape',
        rating: 2,
        value: 5,
      },
      {
        name: 'Anal Play/Anal Sex',
        rating: 4,
        value: 7,
      }, {
        name: 'Lactation (giving, receiving)',
        value: 22,
        rating: 4,
      },
    ]

    for (var i = 0; i < this.props.data.length; i++) {
      for (var e = 0; e < tempuserobjects.length; e++) {
        if (this.props.data[i].name === tempuserobjects[e].name) {
          let calculatedRating = {
            name: this.props.data[i].name,
            rating: (this.props.data[i].rating + tempuserobjects[e].rating) / 2,
            value: this.props.data[i].value,
            id: this.props.data[i].id
          }
          console.log('calculated', calculatedRating);
          calculatedRatingObjects.push(calculatedRating);
        }
      }
      this.setState({
        calculatedRatings: [...calculatedRatingObjects]
      })
    }
  }

  render() {
    const {
      calculatedRatings
    } = this.state;
    return (
      <View style={styles.container}>
        <NavBar
          text='Results'
        />
        <ScrollView contentContainerStyle={styles.semiContainer}>
          {
            calculatedRatings.map((item, index) =>
              <KinkRatingDisplayRow
                data={item}
                key={index}
                half={true}
              />
            )
          }
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button
            title='Finish'
            color='#841584'
            onPress={() => Actions.popTo('profile')}
          />
        </View>
      </View>
    );
  }
}

export default KinkComparison;