import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button
}
from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

const fruits = ['Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears',
  'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears',
  'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears'
]

class KinkList extends React.Component {
  state = {
    selectedFruits: []
  }

  onSelectionsChange = (selectedFruits) => {
    // selectedFruits is array of { label, value }
    this.setState({
      selectedFruits
    })
  }

  onPressCallNextList = () => {
    console.log(this.state.selectedFruits);
  }
  render() {
    return (
      <View>
        <Text>Your KinX</Text>
        <ScrollView>
          <SelectMultiple
            items={fruits}
            selectedItems={this.state.selectedFruits}
            onSelectionsChange={this.onSelectionsChange} />
        </ScrollView>
        <Button title='Save' color="#841584" onPress={this.onPressCallNextList}></Button>
      </View>
    );
  }
}

export default KinkList;