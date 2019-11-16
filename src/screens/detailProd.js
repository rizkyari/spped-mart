import React, {Component} from 'react';
import {Container, Content, View, Text, Row, Icon} from 'native-base';
import {StyleSheet, FlatList, Dimensions, Share, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class DetailWebtoon extends Component {
  constructor() {
    super();
    this.state = {
      details: [
        {
          color: 'Available Colors: Black, White, And Green',
          courier: 'JNE, J&T, And Tiki',
        },
      ],
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
      headerStyle: {
        backgroundColor: '#065535',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Icon
          type="FontAwesome"
          name="share-alt"
          style={styles.Share}
          onPress={() => Share.share({message: 'share it'})}
        />
      ),
    };
  };

  render() {
    return (
      <Container>
        <Content style={styles.Content}>
          <View style={styles.BigPictCon}>
            <Image
              source={{uri: this.props.navigation.getParam('detail')}}
              style={styles.BigPict}
            />
          </View>

          <View style={styles.AllCon}>
            <FlatList
              data={this.state.details}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.AllCont} key={item.image}>
                  <Row>
                    <View style={styles.AllDes}>
                      <Text style={styles.AllEp}>{item.color}</Text>
                      <Text>Available Courrier : {item.courier}</Text>
                      <Text>
                        Price : {this.props.navigation.getParam('price')}
                      </Text>
                      <Text>{this.props.navigation.getParam('desc')}</Text>
                    </View>
                  </Row>
                </View>
              )}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Share: {
    marginRight: 20,
  },
  Content: {
    paddingVertical: 20,
  },
  BigPictCon: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  BigPict: {
    width: 390,
    borderWidth: 3,
    borderColor: 'black',
    height: 250,
  },
  AllCon: {
    margin: 15,
    marginTop: 0,
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
  AllEp: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  AllDate: {
    marginBottom: 5,
    fontSize: 13,
  },
});
