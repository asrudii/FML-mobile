import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Item, Input, Icon, Card, CardItem } from 'native-base';


class Home extends Component {
    static navigationOptions = {
        header: null
      };
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                
                {/* Header */}
                <View style={styles.header}>
                    <View style={{flex:1}}>
                        <Item rounded >
                            <Icon type="Feather" name='search' />
                            <Input placeholder='cari dulu deh ...'/>
                        </Item>
                    </View>
                    <View style={styles.iconheader}>
                        <Icon style={{ color: '#0097A7'}} type="Feather" name='heart' />
                    </View>
                    <View style={styles.iconheader}>
                        <Icon style={{ color: '#0097A7'}} type="Feather" name='shopping-cart' />
                    </View>
                    <View style={styles.iconheader}>
                        <Icon style={{ color: '#0097A7'}} type="Feather" name='user' />
                    </View>
                </View>

                 {/* Menu */}
                <View style={styles.menu}>
                    <Card style={styles.menubox}>
                        <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                            <Icon style={styles.iconmenu} type="FontAwesome" name='coffee' />
                            <Text>minuman</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.menubox}>
                        <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                            <Icon style={styles.iconmenu} type="MaterialCommunityIcons" name='hamburger' />
                            <Text >makanan</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.menubox}>
                        <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                            <Icon style={styles.iconmenu} type="MaterialCommunityIcons" name='cupcake' />
                            <Text>kue</Text>
                        </CardItem>
                    </Card>
                </View>

                {/* Kategori ter */}
                <Text style={{alignSelf: 'flex-start'}}>kategori ter</Text>
                <View style={styles.menu}>
                    <Card style={styles.menubox}>
                        <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                            <Icon style={styles.iconmenu} type="FontAwesome" name='coffee' />
                            <Text>minuman</Text>
                        </CardItem>
                    </Card>
                    <Card style={styles.menubox}>
                        <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                            <Icon style={styles.iconmenu} type="MaterialCommunityIcons" name='hamburger' />
                            <Text >makanan</Text>
                        </CardItem>
                    </Card>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      flexDirection : 'column',
      alignItems: 'center',
      paddingLeft : 20,
      paddingRight : 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    iconheader : {
        padding: 10,
        paddingRight : 0
    }, 
    menu : {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        paddingVertical: 30,
        borderBottomColor : '#ddd',
        borderBottomWidth: 1,
    },
    menubox : {
        flex: 1,
        alignItems: 'center'
    },
    iconmenu : { 
        color: '#F15C5E',
        fontSize: 32
    }
    
  })

export default Home;