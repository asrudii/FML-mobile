import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Card, CardItem } from 'native-base';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.menu}>
            <Card style={styles.menubox}>
                <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                    <Icon style={styles.iconmenu} type="FontAwesome" name='coffee' />
                    <Text style={{fontSize: 12}}>minuman</Text>
                </CardItem>
            </Card>
            <Card style={styles.menubox}>
                <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                    <Icon style={styles.iconmenu} type="MaterialCommunityIcons" name='hamburger' />
                    <Text style={{fontSize: 12}}>makanan</Text>
                </CardItem>
            </Card>
            <Card style={styles.menubox}>
                <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                    <Icon style={styles.iconmenu} type="MaterialCommunityIcons" name='cupcake' />
                    <Text style={{fontSize: 12}}>kue</Text>
                </CardItem>
            </Card>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    menu : {
        flexDirection: 'row', 
        alignItems: 'flex-start',
        paddingVertical: 20,
        borderBottomColor : '#ddd',
        borderBottomWidth: 1,
    },
    menubox : {
        height: 90,
        width: 90,
        alignItems: 'center',
        marginRight: 10
    },
    iconmenu : { 
        color: '#F15C5E',
        fontSize: 32
    },
})

export default Menu;
