import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Footer,
  FooterTab,
} from 'native-base';

export default class cart extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      priceTot: 0,
      prodtot: [],
      // prices: [],
      totals: 0,
    };
  }

  componentDidMount() {
    this.getdata();
    this.price();
    this.totalPrice();
  }
  getdata = () => {
    var data = this.state.prodtot.concat(
      this.props.navigation.getParam('cart'),
    );
    //console.log(data);

    this.setState({
      prodtot: data,
    });
    //console.log(this.state.prodtot);
  };

  price = () => {
    let data = this.props.navigation
      .getParam('cart')
      .map(item => item.cart.harga);
    //console.log(data);

    // this.setState({prices: data});
    return data;
  };

  totalPrice = () => {
    const x = this.price();
    const sum = (a, b) => a + b;
    const result = x.reduce(sum);
    //console.log(result);
    this.setState({totals: result});
  };

  checkout = () => {
    alert('Thank You For Shopping With Us');
    this.props.navigation.navigate('Home');
  };

  render() {
    //console.log(this.props.navigation.getParam('cart'));
    //console.log(this.state.prodtot);
    console.log(this.state.totals);

    return (
      <Container>
        <Header style={{backgroundColor: '#ffffff'}}>
          <Image
            source={require('../assets/logo1.png')}
            style={{width: 315, height: 45, padding: 10, marginTop: 5}}
          />
        </Header>

        <Content>
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              This Is Your Basket
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Please Make Sure Before You Check Out
            </Text>
          </View>
          <View style={{alignItems: 'center', margin: 10}}>
            {this.props.navigation.getParam('cart').map(image => (
              <View key={image.title}>
                <Text>
                  1X {image.cart.title}, harga : Rp.{image.cart.harga},-
                </Text>
              </View>
            ))}
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>
              Your Total Price Would Be: Rp.{this.state.totals},-
            </Text>
          </View>
          <View style={{alignItems: 'center', margin: 17}}>
            <Button style={{width: 85}} onPress={() => this.checkout()}>
              <Text style={{marginLeft: 8}}>Check Out!</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#065535', borderTopWidth: 1}}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color: 'black'}} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>home</Text>
            </Button>
            {/* <Button onPress={() => this.props.navigation.navigate('Cart')}>
              <Icon name="cart" style={{color: 'white'}} />
              <Text style={{color: 'white'}}>Cart</Text>
            </Button> */}
            <Button onPress={() => this.props.navigation.navigate('Profile')}>
              <Icon name="person" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Profile</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
