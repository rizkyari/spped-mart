import React, {Component} from 'react';
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
} from 'native-base';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-banner-carousel';
//import {TouchableOpacity} from 'react-native-gesture-handler';

export default class ForYou extends Component {
  BannerWidth = Dimensions.get('window').width;
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      banners: [
        {
          title: 'Redmi Note 7',
          image:
            'https://i.gadgets360cdn.com/products/large/1551344229_635_redmi_note_7_pro.jpg',
          harga: 1700000,
          desc:
            'The design of Redmi Note 7 is very elegant, come with 6.5 screen size and Snapdragon 660 processor ',
        },
        {
          title: 'Playstation 5',
          image: 'http://cdn2.tstatic.net/jatim/foto/bank/images/ps-5.jpg',
          harga: 4400000,
          desc:
            'It just come out, new released from Sony Playsation. Now support 6D, so you can feel it with all of your senses ',
        },
        {
          title: 'Switch',
          image:
            'https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/s/w/switch_console_shot_1.jpg',
          harga: 2800000,
          desc:
            'The best handheld right now can be yours. Nintendo Switch has become king of handheld in this era.',
        },
        {
          title: 'Nokia 3310',
          image:
            'https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg',
          harga: 325000,
          desc:
            'Nokia always serve their customers with superb quality. So you don"t have to worry if your phone got splashed with water or get burn in fire',
        },
        {
          title: 'Sandisk 128 gb',
          image:
            'https://saung.net/wp-content/uploads/2018/09/SanDisk-Flashdisk-Cruzer-Blade.jpg',
          harga: 150000,
          desc:
            'Sandisk now come out with ultra size capacity. 128gb, you can save your anime or k-drama in your flashdisk.',
        },
        {
          title: 'OTG Kingston',
          image:
            'https://imgaz3.staticbg.com/thumb/large/oaupload/banggood/images/A0/49/dadb6430-30c4-4116-bc3f-5e6a6fdd4447.jpeg',
          harga: 30000,
          desc:
            'Need to store file from your mobile? No need to worry. With this OTG you can plug your mobile to any flashdrive.',
        },
      ],
      cart: [],
    };
  }

  handleCart = image => {
    this.state.cart.push({cart: image});
    console.log(this.state.cart);
  };

  render() {
    return (
      <Container>
        <Header searchBar rounded style={styles.Header}>
          {/* <Item rounded>
            <Input placeholder="Search" />
            <Icon name="search" style={styles.HeaderIcon} />
          </Item> */}
          <Image
            source={require('../assets/logo1.png')}
            style={{width: 315, height: 45, padding: 10, marginTop: 5}}
          />
        </Header>

        <Content style={styles.Content}>
          <View>
            <Carousel
              autoplay
              autoplayTimeout={3000}
              loop
              pageSize={this.BannerWidth}>
              {this.state.banners.map(image => (
                <View style={styles.Carousel} key={image.image}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('detailProd', {
                        detail: image.image,
                        title: image.title,
                        price: image.harga,
                        desc: image.desc,
                      })
                    }>
                    <Image
                      style={styles.CarouselImg}
                      source={{uri: image.image}}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </Carousel>
          </View>

          <View style={styles.ScrollView}>
            <Text style={styles.Fav}>Favorite Item</Text>
            <ScrollView horizontal={true}>
              {this.state.banners.map(image => (
                <View style={styles.ScrollViewCon} key={image.image}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('detailProd', {
                        detail: image.image,
                        title: image.title,
                        price: image.harga,
                        desc: image.desc,
                      })
                    }>
                    <Image
                      style={styles.ScrollViewImg}
                      source={{uri: image.image}}
                    />
                    <Text>{image.title}</Text>
                    <Text>Rp.{image.harga},-</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={styles.AllCon}>
            <Text style={styles.All}>All</Text>
            {this.state.banners.map(image => (
              <View style={styles.AllCont} key={image.image}>
                <Row>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('detailProd', {
                        detail: image.image,
                        title: image.title,
                        price: image.harga,
                        desc: image.desc,
                      })
                    }>
                    <Image style={styles.AllImg} source={{uri: image.image}} />
                  </TouchableOpacity>
                  <View style={styles.AllDes}>
                    <Text style={styles.AllTitle}>{image.title}</Text>
                    <Text style={styles.AllTitle}>Rp.{image.harga},-</Text>
                    <Button
                      warning
                      small
                      style={styles.AllButton}
                      onPress={() => this.handleCart(image)}>
                      <Text style={styles.AllFav}>+ Add Cart</Text>
                    </Button>
                  </View>
                </Row>
              </View>
            ))}
          </View>
        </Content>
        <Footer>
          <FooterTab style={{backgroundColor: '#065535', borderTopWidth: 1}}>
            <Button onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" style={{color: 'white'}} />
              <Text style={{color: 'white', fontWeight: 'bold'}}>home</Text>
            </Button>
            <Button onPress={() => this.props.navigation.navigate('Cart',{cart:this.state.cart})}>
              <Icon name="cart" style={{color: 'black'}} />
              <Text style={{color: 'black'}}>Cart</Text>
            </Button>
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

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#ffffff',
    borderBottomWidth: 2,
    borderBottomColor: '#065535',
  },
  HeaderIcon: {
    paddingRight: 17,
    fontSize: 30,
  },
  Content: {
    paddingVertical: 20,
  },
  Carousel: {
    flex: 1,
    alignSelf: 'center',
  },
  CarouselImg: {
    width: 380,
    height: 250,
    borderWidth: 2,
    borderColor: 'black',
  },
  ScrollView: {
    margin: 15,
  },
  Fav: {
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize: 20,
  },
  ScrollViewCon: {
    flex: 1,
    marginRight: 15,
    alignSelf: 'center',
    width: 150,
  },
  ScrollViewImg: {
    width: 150,
    borderWidth: 2,
    borderColor: 'black',
    height: 150,
    marginBottom: 5,
  },
  AllCon: {
    margin: 15,
    marginTop: 0,
  },
  All: {
    marginBottom: 18,
    fontWeight: 'bold',
    fontSize: 20,
  },
  AllCont: {
    marginBottom: 15,
  },
  AllImg: {
    width: 75,
    height: 75,
    borderWidth: 2,
    borderColor: 'black',
  },
  AllDes: {
    marginLeft: 15,
    flex: 1,
    justifyContent: 'center',
  },
  AllTitle: {
    marginBottom: 5,
  },
  AllButton: {
    width: 110,
  },
  AllFav: {
    fontSize: 12,
    color: 'black',
    fontWeight: 'bold',
  },
});
