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

const kinx = [{
  value: 1,
  label: 'Age Play (you play younger)',
}, {
  value: 2,
  label: 'Examinations (doctor-nurse play/medical scenes)'
}, {
  value: 3,
  label: 'Family Play (e.g. Incest Play)'
}, {
  value: 4,
  label: 'Daddy/little girl (DD/lg)'
}, {
  value: 5,
  label: 'Fantasy Rape'
}, {
  value: 6,
  label: 'Kidnapping'
}, {
  value: 7,
  label: 'Anal Play/Anal Sex'
}, {
  value: 8,
  label: 'Anal Plugs/Beads'
}, {
  value: 9,
  label: 'Camming Sex with me'
}, {
  value: 10,
  label: 'Camming Sex with me and others'
}, {
  value: 11,
  label: 'Creampies'
}, {
  value: 12,
  label: 'Dildos'
}, {
  value: 13,
  label: 'Double Penetration with dildos'
}, {
  value: 14,
  label: 'Double Penetration with two men'
}, {
  value: 15,
  label: 'Fisting (anal)'
}, {
  value: 16,
  label: 'Fisting (vaginal)'
}, {
  value: 17,
  label: 'Food Play'
}, {
  value: 18,
  label: 'Gang Bang'
}, {
  value: 19,
  label: 'Genital Sex'
}, {
  value: 20,
  label: 'Glory-Hole Sex'
}, {
  value: 21,
  label: 'Golden Showers'
}, {
  value: 22,
  label: 'Lactation (giving)',
  id: 1
}, {
  value: 23,
  label: 'Lactation (receiving)',
  id: 1
}, {
  value: 24,
  label: 'Licking (body homage with tongue)'
}, {
  value: 25,
  label: 'Menstruation (sex during)'
}, {
  value: 26,
  label: 'Oral-Anal Play (rimming, receiving)'
}, {
  value: 27,
  label: 'Oral-Anal Play (doing to another)'
}, {
  value: 28,
  label: 'Phone Sex'
}, {
  value: 29,
  label: 'Photos on demand (via messenger during the day)'
}, {
  value: 30,
  label: 'Sexual Deprivation'
}, {
  value: 31,
  label: 'Strap-Ons (receiving)',
  id: 2
}, {
  value: 32,
  label: 'Strap-Ons (wearing/giving)',
  id: 2
}, {
  value: 33,
  label: 'Swapping (being given)'
}, {
  value: 34,
  label: 'Swinging (one or more other couples)'
}, {
  value: 35,
  label: 'Swallowing (cum)'
}, {
  value: 36,
  label: 'Talking Dirty (Talker)',
  id: 3
}, {
  value: 37,
  label: 'Talking Dirty (Talkee)',
  id: 3
}, {
  value: 38,
  label: 'Tickling'
}, {
  value: 39,
  label: 'Vibrators'
}, {
  value: 40,
  label: 'Wrestling'
}, {
  value: 41,
  label: 'Collars (in public)'
}, {
  value: 42,
  label: 'Erotic Dancing (for an audience)'
}, {
  value: 43,
  label: 'Exhibitionism/Flashing (friends)'
}, {
  value: 44,
  label: 'Exhibitionism/Flashing (strangers)'
}, {
  value: 45,
  label: 'Forced Masturbation'
}, {
  value: 46,
  label: 'Forced Nudity (private)'
}, {
  value: 47,
  label: 'Forced Nudity (around others)'
}, {
  value: 48,
  label: 'Humiliation, Verbal (public)'
}, {
  value: 49,
  label: 'Led by a leash (public)'
}, {
  value: 50,
  label: 'Modeling for erotic photos (I take photos)'
}, {
  value: 51,
  label: 'Modeling for erotic photos (others take photos)'
}, {
  value: 52,
  label: 'Outdoor scenes/sex'
}, {
  value: 53,
  label: 'Public Places Sex, secret'
}, {
  value: 54,
  label: 'Public Places Sex, open'
}, {
  value: 55,
  label: 'Skinny Dipping'
}, {
  value: 56,
  label: 'Slutty Clothing (public)'
}, {
  value: 57,
  label: 'Voyeurism (watching others)'
}, {
  value: 58,
  label: 'Voyeurism (watching me with others)'
}, {
  value: 59,
  label: 'Video (watching porn)'
}, {
  value: 60,
  label: 'Video (recordings of you)'
}, {
  value: 61,
  label: '24/7 Total Power Exchange'
}, {
  value: 62,
  label: 'Being Drugged'
}, {
  value: 63,
  label: 'Begging/Pleading'
}, {
  value: 64,
  label: 'Boot Worship'
}, {
  value: 65,
  label: 'Chastity Belts'
}, {
  value: 66,
  label: 'Chauffeuring (driving)'
}, {
  value: 67,
  label: 'Chores (domestic service/housework)'
}, {
  value: 68,
  label: 'Competitions (with other subs)'
}, {
  value: 69,
  label: 'Enforced Chastity'
}, {
  value: 70,
  label: 'Exercise (forced/required)'
}, {
  value: 71,
  label: 'Eye Contact Restrictions'
}, {
  value: 72,
  label: 'Following Orders'
}, {
  value: 73,
  label: 'Foot Worship'
}, {
  value: 74,
  label: 'Forced Dressing'
}, {
  value: 75,
  label: 'Forced Eating (gaining or losing weight)'
}, {
  value: 76,
  label: 'Forced Journaling of experiences'
}, {
  value: 77,
  label: 'Forced Masturbation, on demand during the day'
}, {
  value: 78,
  label: 'Forced Masturbation, at home'
}, {
  value: 79,
  label: 'Forced to Sleep not in Bed (e.g., on floor)'
}, {
  value: 80,
  label: 'Given (Loaned) Away to another to use you'
}, {
  value: 81,
  label: 'Hair Coloring'
}, {
  value: 82,
  label: 'Hair Cutting'
}, {
  value: 83,
  label: 'Hair Shaving (body/genitalia)'
}, {
  value: 84,
  label: 'Hair Shaving (head)'
}, {
  value: 85,
  label: 'Hair Waxing (body/genitalia)'
}, {
  value: 86,
  label: 'Being Bitten'
}, {
  value: 87,
  label: 'Being Bled'
}, {
  value: 88,
  label: 'Belts (spanked or spanking with one)'
}, {
  value: 89,
  label: 'Breast Play/Torture'
}, {
  value: 90,
  label: 'Breath Control/Asphyxiation/Suffocation'
}, {
  value: 91,
  label: 'Bruises (marks on the body)'
}, {
  value: 92,
  label: 'Choking'
}, {
  value: 93,
  label: 'Clothespins'
}, {
  value: 94,
  label: 'Crying (being made to cry)'
}, {
  value: 95,
  label: 'Face Slapping'
}, {
  value: 96,
  label: 'Fear (being scared)'
}, {
  value: 97,
  label: 'Feathers'
}, {
  value: 98,
  label: 'Hairbrush Spankings'
}, {
  value: 99,
  label: 'Hair Pulling'
}, {
  value: 100,
  label: 'Hot wax (candle wax)'
}, {
  value: 101,
  label: 'Ice Cubes'
}, {
  value: 102,
  label: 'Nipple play/torture'
}, {
  value: 103,
  label: 'Over-the-knee spankings'
}, {
  value: 104,
  label: 'Pinching'
}, {
  value: 105,
  label: 'Pussy Torture'
}, {
  value: 106,
  label: 'Riding Crops'
}, {
  value: 107,
  label: 'Scratching'
}, {
  value: 108,
  label: 'Spanking'
}, {
  value: 109,
  label: 'Speculums'
}, {
  value: 110,
  label: 'Spitting'
}, {
  value: 111,
  label: 'Swallowing (urine)'
}, {
  value: 112,
  label: 'Wooden Paddles'
}, {
  value: 113,
  label: 'Blindfolds'
}, {
  value: 114,
  label: 'Bondage (light)'
}, {
  value: 115,
  label: 'Bondage (heavy)'
}, {
  value: 116,
  label: 'Bondage (prolonged)'
}, {
  value: 117,
  label: 'Chains'
}, {
  value: 118,
  label: 'Cuff Restraints (ankle and wrist)'
}, {
  value: 119,
  label: 'Gags/Mouth Bits'
}, {
  value: 120,
  label: 'Handcuffs/Shackles'
}, {
  value: 121,
  label: 'Saran Wrapping/Cling'
}, {
  value: 122,
  label: 'Shibari (Intricate Rope Bondage)'
}, {
  value: 123,
  label: 'Collars (in private)'
}, {
  value: 124,
  label: 'Corsettes'
}, {
  value: 125,
  label: 'Cross Dressing'
}, {
  value: 126,
  label: 'Denim'
}, {
  value: 127,
  label: 'High Heel wearing'
}, {
  value: 128,
  label: 'Hoods/Masks'
}, {
  value: 129,
  label: 'Latex'
}, {
  value: 130,
  label: 'Leather'
}, {
  value: 131,
  label: 'Lingerie'
}, {
  value: 132,
  label: 'Lycra/Spandex'
}, {
  value: 133,
  label: 'Pantyhose/Stockings'
}, {
  value: 134,
  label: 'Uniforms'
}]

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
            items={kinx.map((item => item))}
            selectedItems={this.state.selectedFruits}
            onSelectionsChange={this.onSelectionsChange} />
        </ScrollWrapper>
        <ButtonWrapper>
          <Button
            title='Save'
            color='#841584'
            onPress={() => this.state.selectedFruits.length !== 0 && Actions.kinkrating({data: this.state.selectedFruits})}
          />
        </ButtonWrapper>
      </Container>
    );
  }
}

export default KinkList;