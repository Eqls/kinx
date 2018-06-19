import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button
} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';
import styled from 'styled-components';

const fruits = ['Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears',
  'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears',
  'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears', 'Apples', 'Oranges', 'Pears'
]

const Container = styled.View`
  flex: 1;
  flex-direction: column;
`;

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
      <Container>
        <Text>Your KinX</Text>
        <ScrollView>
          <SelectMultiple
            items={fruits}
            selectedItems={this.state.selectedFruits}
            onSelectionsChange={this.onSelectionsChange} />
        </ScrollView>
        <Button 
          title='Save' 
          color='#841584' 
          onPress={this.onPressCallNextList} />
      </Container>
    );
  }
}

export default KinkList;