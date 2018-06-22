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
} from 'react-native-router-flux'
import {
  KinkRatingDisplayRow
} from '../components/KinkRatingDisplayRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  buttonWrapper: {
    width: '100%',
    height: 40
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
      <View style={styles.container}>
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
        <View style={styles.buttonWrapper}>
          <Button
            title='Finish'
            color='#841584'
            onPress={() => Actions.popTo('main')}
          />
        </View>
      </View>
    );
  }
}

export default KinkComparison;