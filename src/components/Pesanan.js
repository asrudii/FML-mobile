import React, { Component } from 'react';
import { View, StyleSheet,  Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Text,  Card, CardItem, Icon } from 'native-base';
import NumericInput from 'react-native-numeric-input';

class Pesanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
        namaproduk : '',
        idproduk : '',
        hargaproduk : ''
    };
  }

  componentDidMount() {
      this.showdata()
  }

  showdata = async () => {
    try {
      const data = await AsyncStorage.getItem('pesanan');
      let pesanandata = JSON.parse(data);
      if (pesanandata !== null) {
          this.setState({
            namaproduk: pesanandata.namaproduk,
            idproduk: pesanandata.idproduk,
            hargaproduk: pesanandata.hargaproduk
        })
      }
      else {
        alert('Tidak ada pesanan')
        this.props.navigation.navigate('Home');
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  beli = () => {
    // AsyncStorage.removeItem('pesanan');
  }

  render() {
    return (
        <Card style={styles.cardbox}>
            <CardItem header>
                <Image style={styles.imageproduct} source={require('../image/produk/strowberry.jpg')} />
                <View style={{padding : 10, paddingTop: 0, alignItems: 'flex-start'}}>
                    {/* {this.props.idproduk} */}
                    <Text style={{marginBottom : 5, fontSize: 14}}>{this.state.namaproduk}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color : '#A9A9A9', fontSize: 12}}>{this.state.hargaproduk}</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <NumericInput style={styles.nomor} minValue={0} totalWidth={50} totalHeight={40} type='up-down' iconSize={15} step={1.5} rounded  onChange={value => console.log(value)} />
                    <TouchableOpacity onPress={this.beli()}>
                        <Icon style={{ color: '#707070', fontSize: 24, padding: 10, paddingRight: 0,}} type="Feather" name='trash' />
                    </TouchableOpacity>
                </View>
            </CardItem>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
    cardbox : {
        alignItems: 'flex-start',
        alignSelf: 'stretch'
    }, 
    imageproduct : {
        height: 70,
        width: 70,
        borderRadius: 10,
    }, 
    nomor : {
        fontSize : 12, 
        width: 20
    }
})

export default Pesanan;
