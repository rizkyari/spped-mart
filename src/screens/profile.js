import React, {Component} from 'react';
import {Text} from 'react-native';
import {Container, Content, Button, Icon, Footer, FooterTab} from 'native-base';

export default class cart extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <Container>
        <Content>
          <Text> This Is Profile Page </Text>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#065535', borderTopWidth: 1}}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color: 'black'}} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon name="cart" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Cart</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" style={{color: 'white'}} />
              <Text style={{color: 'white'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
