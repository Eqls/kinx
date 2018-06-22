import React from 'react';
import {
  Text,
  Platform,
  ScrollView,
  Button,
  StyleSheet
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux'
import {
  KinkRatingRow
} from '../components/KinkRatingRow';

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

class KinkRating extends React.Component {


  state = {
    rating_descs: [
      'Hard limit / Something I won’t do / Turn off',
      'Does nothing for me, but isn’t a limit',
      'I would do it if the other person enjoyed it',
      'Haven’t done it but want to try',
      'Very much into / Something I enjoy / Turn On'
    ],
    ratings: [{
      name: '',
      rating: 1,
      value: 0,
      id: 0
    }]
  }

  componentDidMount() {
    let ratingObjects = [];
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
      <View style={styles.container}>
        <ScrollView>
          {
            ratings.map((item, index) =>
              <KinkRatingRow
                key={index} 
                index={index} 
                data={item} 
                descs={this.state.rating_descs}
                handleChange={this.handleChange}
              />
            )
          }
        </ScrollView>
        <View style={styles.buttonWrapper}>
          <Button
            title='Save'
            color='#841584'
            onPress={() => Actions.kinkcomparison({data: this.state.ratings})}
          />
        </View>
      </View>
    );
  }
}

export default KinkRating;