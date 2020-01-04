import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text,  Button, Icon, Form, Picker } from 'native-base';

import Pesanan from './Pesanan';

class Keranjang extends Component {

    constructor(props) {
    super(props);
    this.state = {
        selected: undefined,
        selected2: undefined,
    };
  }
  
  onValueChange(value: string) {
    this.setState({  
        selected: value
    });
  };

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  };

  render() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.judul}>pesanan kamu</Text>
                
                <Pesanan />                            

                {/* total */}
                
                <View style={styles.sold}>
                    <View style={{flex : 1, paddingLeft: 20 }}>
                        <Text style={{fontWeight: 'bold'}}>Total</Text>  
                    </View>
                    <View style={{paddingRight: 20}}>
                        <Text style={{fontWeight: 'bold'}}>RP. 10.000</Text>
                    </View>
                </View>

                {/* metode bayar */}
                <View style={styles.sold}>
                    <View style={{flex : 0.9, paddingLeft: 20 }}>
                        <Text style={{color : '#707070', fontSize: 14}}>bayar pakai</Text>  
                    </View>
                    <View style={styles.pickerbox}>
                        <Form>
                            <Picker
                                mode="dropdown"
                                placeholder="Select your SIM"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={styles.pickerlist}
                                selectedValue={this.state.selected}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                            <Picker.Item label="cod" value="key0" />
                            </Picker>
                        </Form>
                    </View>
                </View>

                {/* pilih ambil */}
                <View style={styles.sold}>
                    <View style={{flex : 0.9, paddingLeft: 20 }}>
                        <Text style={{color : '#707070', fontSize: 14}}>pilih tempat</Text>  
                    </View>
                    <View style={styles.pickerbox}>
                        <Form>
                            <Picker
                                mode="dropdown"
                                placeholder="Select your SIM"
                                iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                                style={styles.pickerlist}
                                selectedValue={this.state.selected2}
                                onValueChange={this.onValueChange2.bind(this)}
                            >
                            <Picker.Item label="anter" value="key0" />
                            <Picker.Item label="makan ditempat" value="key1" />
                            </Picker>
                        </Form>
                    </View>
                </View>
                <View style={{ alignItems : 'flex-end'}}>
                    <Button danger block style={{ borderRadius: 5, marginTop: 30}} onPress={() => this.props.navigation.navigate('Invoice')}>
                        <Text style={{fontSize: 12}}> bayar </Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : 'column',
        padding : 20,
        paddingTop: 0
    }, 
    judul : {
        marginBottom : 20,
        color: '#A9A9A9',
    },
    sold : {
        flexDirection: 'row', 
        marginTop: 20
    },
    pickerbox : { 
        flex: 0.6, 
        borderColor: '#ddd', 
        borderWidth: 1, 
        borderRadius : 10,
    },
    pickerlist : {
        width: undefined, 
        height: 20,
        fontSize: 10, 
        color : '#707070',
    }
})

export default Keranjang;
