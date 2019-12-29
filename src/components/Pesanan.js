import React, { Component } from 'react';
import { View, StyleSheet,  Image, TouchableOpacity } from 'react-native';
import { Text,  Card, CardItem, Icon } from 'native-base';
import NumericInput from 'react-native-numeric-input';

class Pesanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
        <Card style={styles.cardbox}>
            <CardItem header>
                <Image style={styles.imageproduct} source={require('../image/produk/strowberry.jpg')} />
                <View style={{padding : 10, paddingTop: 0, alignItems: 'flex-start'}}>
                    <Text style={{marginBottom : 5, fontSize: 14}}>Thai Tea Lemon</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color : '#A9A9A9', fontSize: 12}}>Rp. 5000</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', flex: 1, paddingLeft: 10, paddingTop: 10}}>
                    <NumericInput style={styles.nomor} minValue={0} totalWidth={50} totalHeight={40} type='up-down' iconSize={15} step={1.5} rounded  onChange={value => console.log(value)} />
                    <TouchableOpacity onPress={() => alert('dihapus')}>
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
