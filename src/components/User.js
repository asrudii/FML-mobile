import React, { Component } from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Thumbnail, Text, Tab, Tabs, TabHeading, Icon, Card, CardItem  } from 'native-base';

import jwt_decode from 'jwt-decode';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email : '',
      telp : ''

    };
  }

  componentDidMount() {
    this.showdata()

  }

  showdata = async () => {
    try {
      const data = await AsyncStorage.getItem('usertoken');
      let token = JSON.parse(data);
      const decode = jwt_decode(token);
      if (data !== null) {
          this.setState({
            username: decode.username,
            email: decode.email,
            telp: decode.telp
        })
      }
      else {
        alert('kamu belum login')
        this.props.navigation.navigate('Login');
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* image profil */}
        <View style={styles.userimage}>
            <Thumbnail large source={require('../image/user/user1.jpg')} />
            <Text style={{padding: 10}}>{this.state.username}</Text>
        </View>
        
        {/* konten profil */}
        <View style={styles.kontenprofil}>
            <Tabs>
                <Tab heading={ <TabHeading><Text>Info User</Text></TabHeading>}>
                  <View style={{padding: 10, flexDirection: 'column'}}>
                    <View>
                        <Text>username : {this.state.username}</Text>
                    </View>
                    <View>
                        <Text>email : {this.state.email}</Text>
                    </View>
                    <View>
                        <Text>telp : {this.state.telp}</Text>
                    </View>
                  </View>
                </Tab>
                <Tab heading={ <TabHeading><Text>Tagihan</Text></TabHeading>}>
                    <View style={{alignSelf: 'stretch', paddingBottom: 20}}>
                      <Text> Tagihan kamu </Text>
                      <Card >
                          <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                              <Text style={{fontSize: 24, color: '#F15C5E'}}>Rp. 20.012</Text>
                          </CardItem>
                      </Card>
                  </View>
                </Tab>
            </Tabs>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : 'column',
        paddingTop: 0
    },
    userimage : {
        padding : 20,
        flex: 0.5,
        alignItems: 'center',
        justifyContent : 'center',
    },
    kontenprofil : {
        flex: 1,
        padding : 20
    }


});

export default User;
