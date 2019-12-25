import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import { Button, Text, Form, Item, Input, Icon } from 'native-base';

class Login extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        return (
            <View style={styles.container}>
        
                <Image source={require('../image/Logo.png')} />

                <View style={styles.box}>
                    <Form style={styles.formbox}>
                        <Item style={{marginLeft: 0}}>
                        <Icon type="Feather" name='user' />
                        <Input placeholder='username'/>
                        </Item>
                        <Item style={{marginLeft: 0}}>
                        <Icon type="Feather" name='lock' />
                        <Input placeholder='password' secureTextEntry={true}/>
                        </Item>
                    </Form>
                </View>

                <View style={styles.box}>
                    <Button block danger style={styles.button} onPress={() => this.props.navigation.navigate('Home')}>
                        <Text>Masuk</Text>
                    </Button>
                    <Text style={{alignSelf: 'center'}}>lupa password?</Text>
                </View>

                
                <View style={styles.duakolom}>
                    <View style={styles.kolom1}>
                        <Text style={{alignSelf: 'flex-end', paddingTop: 10}}>tidak punya akun?</Text>
                    </View>
                    <View style={styles.kolom1}>
                        <Button bordered danger style={styles.button}>
                            <Text style={styles.outlinebtn} onPress={() => this.props.navigation.navigate('Register')}>Daftar</Text>
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
        paddingLeft : 20,
        paddingRight : 20,
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