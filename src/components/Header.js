import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Item, Input, Icon } from 'native-base';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 
  render() {
    return (
        <View style={styles.header}>
            <View style={{flex:1}} >
                <Item style={styles.searchinput} rounded >
                    <Icon style={{fontSize: 18, color: '#2C2C2C'}} type="Feather" name='search' />
                    <Input style={styles.search} placeholder='cari dulu deh ...'/>
                </Item>
            </View>
            <View style={styles.iconheader}>
                <TouchableOpacity onPress={this.props.like}>
                    <Icon style={{ color: '#0097A7', fontSize: 20}} type="Feather" name='heart' />
                </TouchableOpacity>
            </View>
            <View style={styles.iconheader}>
                <TouchableOpacity onPress={this.props.keranjang}>
                    <Icon style={{ color: '#0097A7', fontSize: 20}} type="Feather" name='shopping-cart' />
                </TouchableOpacity>
            </View>
            <View style={styles.iconheader}>
                <TouchableOpacity onPress={this.props.user}>
                    <Icon style={{ color: '#0097A7', fontSize: 20}} type="Feather" name='user' />
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconheader : {
        paddingTop : 15,
        padding: 10,
        paddingRight : 0
    },
    search : {
        height : 30,
        fontSize : 12,
        padding: 0
    },
    searchinput : {
        borderRadius : 20,
        margin: 10,
        marginLeft: 0
    },
});

export default Header;
