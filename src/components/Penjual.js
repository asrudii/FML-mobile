import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Icon, Card, CardItem } from 'native-base';

import Header from './Header';
import Product from './Product';

class Penjual extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        {/* header */}
        <ImageBackground style={styles.headerpenjual} source={require('../image/produk/strowberry.jpg')} >
            
            <Header 
                keranjang={() => this.props.navigation.navigate('Keranjang')} 
                user={() => this.props.navigation.navigate('User')}
            />  

            <View style={styles.deskbox}>
                <View style={styles.desk}>
                    <Text style={{color: 'white'}}>Warung mang Ewon</Text>
                    <TouchableOpacity style={{ flex: 1, alignItems:'flex-end'}}>
                        <Icon style={styles.iconmenu} type='MaterialIcons' name='place' />
                    </TouchableOpacity>
                </View>
                <View  style={styles.bgdesk} />
            </View>
        </ImageBackground >
        {/* fasilitas */}
        <View>

        </View>

        {/* product */}
        <ScrollView style={{padding: 20}} showsVerticalScrollIndicator={false}>
            <Product />
            <Product />
            <Product />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column'
    },
    headerpenjual : {
        paddingTop : 20,
        width: '100%', 
        height: 250,
    },
    deskbox : {
        flex: 1,
        flexDirection: 'row',
        alignItems : 'flex-end',
    },
    bgdesk : {
        flex: 1,
        flexDirection: 'row',
        backgroundColor : 'black',
        height: 50,
        padding: 10, 
        alignItems: 'flex-end',
        opacity: .2,
        position: "absolute",
        zIndex: 0,
        width: '100%'

    },
    desk : {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        padding: 15, 
        alignItems: 'flex-end',
        position: "absolute",
        zIndex: 1,
        width: '100%'
   },
   iconmenu : {
        fontSize : 25,
        color : 'white'
  },
});

export default Penjual;
