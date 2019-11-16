// import React, {Component} from 'react';
// import {Text} from 'react-native';
// import {Container, Content, Button, Icon, Footer, FooterTab} from 'native-base';

// export default class cart extends Component {
//   static navigationOptions = {
//     header: null,
//   };
//   render() {
//     return (
//       <Container>
//         <Content>
//           <Text> This Is Profile Page </Text>
//         </Content>
//         <Footer>
//           <FooterTab style={{backgroundColor: '#065535', borderTopWidth: 1}}>
//             <Button onPress={() => this.props.navigation.navigate('Home')}>
//               <Icon name="home" style={{color: 'black'}} />
//               <Text style={{color: 'black', fontWeight: 'bold'}}>home</Text>
//             </Button>
//             <Button onPress={() => this.props.navigation.navigate('Cart')}>
//               <Icon name="cart" style={{color: 'black'}} />
//               <Text style={{color: 'black'}}>Cart</Text>
//             </Button>
//             <Button onPress={() => this.props.navigation.navigate('Profile')}>
//               <Icon name="person" style={{color: 'white'}} />
//               <Text style={{color: 'white'}}>Profile</Text>
//             </Button>
//           </FooterTab>
//         </Footer>
//       </Container>
//     );
//   }
// }

import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  Container,
  Content,
  View,
  Text,
  Item,
  Input,
  Button,
  Header,
  Row,
  Footer,
  FooterTab,
  Icon,
  Body,
} from 'native-base';

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          user: 'Mr. Admin',
          email: 'admin@admin.com',
          address: 'Jl. Sandang pangan papan No.13',
        },
      ],
    };
  }

  static navigationOptions = {
    header: null,
  };
  render() {
    console.log(this.state.data);

    return (
      <Container>
        <Header style={styles.header}>
          <View style={styles.container}>
            <View>
              <Text style={styles.headerText}>Settings</Text>
            </View>
          </View>
        </Header>
        <Body style={styles.bodyContent}>
          <View style={styles.content}>
            <Image
              style={{width: 185, height: 185, margin: 5}}
              source={{
                uri:
                  'https://cdn1.iconfinder.com/data/icons/technology-devices-2/100/Profile-512.png',
              }}
            />
            <Text style={styles.textAdmin}>Halo, {this.state.data.user}</Text>
            <Text style={styles.textAdmin}>
              Your email : {this.state.data.email}
            </Text>
            <Text style={styles.textAdmin}>
              Your address : {this.state.data.address}
            </Text>
            <Button style={styles.buttonLogout}>
              <Text>Log Out</Text>
            </Button>
          </View>
        </Body>
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

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#065535',
    padding: 20,
  },
  header: {
    backgroundColor: '#003366',
  },
  bodyContent: {
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  buttonLogout: {
    backgroundColor: '#d11a2a',
    margin: 9,
    borderRadius: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textAdmin: {
    fontSize: 20,
  },
};
