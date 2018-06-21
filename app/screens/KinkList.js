import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  Platform
}
from 'react-native';
import {
  Actions
}
from 'react-native-router-flux'
import SelectMultiple from 'react-native-select-multiple';
import styled from 'styled-components';

const fruits = ['Age Play (you play younger)', 'Examinations (doctor-nurse play/medical scenes)', 'Family Play (e.g. Incest Play)', 'Daddy/little girl (DD/lg)', 'Fantasy Rape', 'Kidnapping', 'Anal Play/Anal Sex', 'Anal Plugs/Beads', 'Anal Plugs/Beads', 'Camming Sex with me', 'Camming Sex with me and others', 'Creampies',
  'Dildos', 'Double Penetration with dildos', 'Double Penetration with two men', 'Fisting (anal)', 'Fisting (vaginal)', 'Food Play', 'Gang Bang', 'Genital Sex', 'Glory-Hole Sex', 'Golden Showers', 'Lactation (giving)', 'Lactation (receiving)',
  'Licking (body homage with tongue)', 'Menstruation (sex during)', 'Oral-Anal Play (rimming, receiving)', 'Oral-Anal Play (doing to another)', 'Phone Sex', 'Photos on demand (via messenger during the day)', 'Sexual Deprivation', 'Strap-Ons (receiving)', 'Strap-Ons (wearing/giving)', 'Swapping (being given)', 'Swinging (one or more other couples)', 'Swallowing (cum)',
  'Talking Dirty (Talker)', 'Talking Dirty (Talkee)', 'Tickling', 'Vibrators', 'Wrestling', 'Collars (in public)', 'Erotic Dancing (for an audience)', 'Exhibitionism/Flashing (friends)', 'Exhibitionism/Flashing (strangers)', 'Forced Masturbation', 'Forced Nudity (private)', 'Forced Nudity (around others)', 'Humiliation, Verbal (public)', 'Led by a leash (public)',
  'Modeling for erotic photos (I take photos)', 'Modeling for erotic photos (others take photos)', 'Outdoor scenes/sex', 'Public Places Sex, secret', 'Public Places Sex, open', 'Skinny Dipping', 'Slutty Clothing (public)', 'Voyeurism (watching others)', 'Voyeurism (watching me with others)', 'Video (watching porn)', 'Video (recordings of you)', '24/7 Total Power Exchange',
  'Being Drugged', 'Begging/Pleading', 'Boot Worship', 'Chastity Belts', 'Chauffeuring (driving)', 'Chores (domestic service/housework)', 'Competitions (with other subs)', 'Enforced Chastity', 'Exercise (forced/required)', 'Eye Contact Restrictions', 'Following Orders', 'Foot Worship', 'Forced Dressing', 'Forced Eating (gaining or losing weight)', 'Forced Journaling of experiences',
  'Forced Masturbation, on demand during the day', 'Forced Masturbation, at home', 'Forced to Sleep not in Bed (e.g., on floor)', 'Given (Loaned) Away to another to use you', 'Hair Coloring', 'Hair Cutting', 'Hair Shaving (body/genitalia)', 'Hair Shaving (head)', 'Hair Waxing (body/genitalia)', 'Being Bitten', 'Being Bled', 'Belts (spanked or spanking with one)', 'Breast Play/Torture',
  'Breath Control/Asphyxiation/Suffocation', 'Bruises (marks on the body)', 'Choking', 'Clothespins', 'Crying (being made to cry)', 'Face Slapping', 'Fear (being scared)', 'Feathers', 'Hairbrush Spankings', 'Hair Pulling', 'Hot wax (candle wax)', 'Ice Cubes', 'Nipple play/torture', 'Over-the-knee spankings', 'Pinching', 'Pussy Torture', 'Riding Crops', 'Scratching', 'Spanking', 'Speculums',
  'Spitting', 'Swallowing (urine)', 'Wooden Paddles', 'Blindfolds', 'Bondage (light)', 'Bondage (heavy)', 'Bondage (prolonged)', 'Chains', 'Cuff Restraints (ankle and wrist)', 'Gags/Mouth Bits', 'Handcuffs/Shackles', 'Saran Wrapping/Cling', 'Shibari (Intricate Rope Bondage)', 'Collars (in private)', 'Corsettes', 'Cross Dressing', 'Denim', 'High Heel wearing', 'Hoods/Masks', 'Latex',
  'Leather', 'Lingerie', 'Lycra/Spandex', 'Pantyhose/Stockings', 'Uniforms'
]

const Container = styled.View `
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: ${Platform.OS === 'ios' ? '20px 0 0 0' : '0'};
`;

const ScrollWrapper = styled.ScrollView `
  width: 100%;
`;

const ButtonWrapper = styled.View `
  width: 100%;
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

  render() {
    return (
      <Container>
        <Text>Your KinX</Text>
        <ScrollWrapper>
          <SelectMultiple
            items={fruits}
            selectedItems={this.state.selectedFruits}
            onSelectionsChange={this.onSelectionsChange} />
        </ScrollWrapper>
        <ButtonWrapper>
          <Button
            title='Save'
            color='#841584'
            onPress={() => Actions.kinkrating({data: this.state.selectedFruits})}
          />
        </ButtonWrapper>
      </Container>
    );
  }
}

export default KinkList;