import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Card, CardItem, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={{alignSelf: 'stretch', paddingBottom: 20}}>
                <Text> Tagihan kamu </Text>
                <Card >
                    <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                        <Text style={{fontSize: 24, color: '#F15C5E'}}>Rp. 20.012</Text>
                        <Text style={{fontSize: 12, color: 'blue'}}>salin</Text>
                    </CardItem>
                </Card>
            </View>
            <View style={{alignSelf: 'stretch'}}>
                <Text> Transfer ke </Text>
                <List>
                    <ListItem thumbnail>
                    <Left>
                        <Thumbnail style={styles.thumb} square source={ require( '../image/bank/mandiri.png') } />
                    </Left>
                    <Body>
                        <Text>7912664901808240 </Text>
                        <Text note numberOfLines={1}>an. asep rudi luqmanul h</Text>
                    </Body>
                    </ListItem>
                </List>
                <List>
                    <ListItem thumbnail>
                    <Left>
                        <Thumbnail style={styles.thumb} square source={ require( '../image/bank/bri.png') } />
                    </Left>
                    <Body>
                        <Text>797129122 </Text>
                        <Text note numberOfLines={1}>an. asep rudi luqmanul h</Text>
                    </Body>
                    </ListItem>
                </List>
            </View>
            <View style={{alignSelf: 'stretch'}}>
                <Button danger block style={{  borderRadius: 5, marginTop: 30}} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{fontSize: 12}}> selesai </Text>
                </Button>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      flexDirection : 'column',
      alignItems: 'flex-start',
      padding : 20,
      paddingTop: 0
    },
    thumb : {
        height : 50,
        width : 70,
        borderRadius: 10,
        padding: 0
    } 
})

export default Invoice;
