import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image, AsyncStorage } from 'react-native';
import { Button, Text, Form, Item, Input, Icon } from 'native-base';


import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
      }
    static navigationOptions = {
        header: null
    };

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    signIn = async () => {
        try {
            axios.post('https://fmlserv.herokuapp.com/api/login', {
                email: this.state.email,
                password: this.state.password
             })
             .then(res => {
                 if (res.data.success != undefined ) {
                    alert(res.data.success); 
                 } else {
                    AsyncStorage.setItem('usertoken', JSON.stringify(res.data))
                    this.props.navigation.navigate('Home');
                 }
             })
        } catch (err) {
          alert(err.data.success);
        }
      }

    render() {
        return (
            <View style={styles.container}>
        
                <Image source={require('../image/Logo.png')} />

                <View style={styles.box}>
                    <Form style={styles.formbox}>
                        <Item style={{marginLeft: 0}}>
                        <Icon type="Feather" name='user' />
                        <Input placeholder='email' onChangeText={val => this.onChangeText('email', val)}/>
                        </Item>
                        <Item style={{marginLeft: 0}}>
                        <Icon type="Feather" name='lock' />
                        <Input placeholder='password' secureTextEntry={true} onChangeText={val => this.onChangeText('password', val)}/>
                        </Item>
                    </Form>
                </View>

                <View style={styles.box}>
                    <Button block danger style={styles.button} onPress={this.signIn}>
                        <Text>Masuk</Text>
                    </Button>
                    <Text style={{alignSelf: 'center'}}>lupa password?</Text>
                </View>

                
                <View style={styles.duakolom}>
                    <View style={styles.kolom1}>
                        <Text style={{alignSelf: 'flex-end', paddingTop: 10}}>tidak punya akun?</Text>
                    </View>
                    <View style={styles.kolom1}>
                        <Button bordered danger style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
                            <Text style={styles.outlinebtn} >Daftar</Text>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: 'column',
        padding : 20,
        alignItems: 'center',
    },
    formbox : {
        paddingVertical: 30,        
        alignSelf: 'stretch',
    },
    box : {
        alignSelf: 'stretch',
    },
    inputfomr : {
        borderBottomColor: '#bbb',
        borderBottomWidth : 1,
        marginBottom: 3,
        alignSelf: 'stretch',
        fontSize: 16,
    },
    button : {
        borderRadius : 10,
        marginBottom : 10,
    },
    duakolom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 20
        
    },
    kolom1 : {
        flex: 0.5,
        alignItems: 'flex-start',
        padding: 10
    },
    outlinebtn : {
        color: '#F15C5E',
        
    }
});

export default Login;