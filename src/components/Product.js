import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Card, CardItem, Button, Icon } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-ratings';
const WATER_IMAGE = require('../image/icon/star.png')

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  ratingCompleted(rating) {
    console.warn("Rating is: " + rating)
  }

  render() {
    return (
      <View style={styles.containerproduct}>
        <Card style={styles.cardbox} >
            <CardItem header button onPress={()=> alert('halo')}>
                <Image style={styles.imageproduct} source={require('../image/produk/strowberry.jpg')} />
                <View style={{padding : 10, paddingTop: 0, alignItems: 'flex-start'}}>
                    <Text style={{marginBottom : 5, fontSize: 14}}>Thai Tea Lemon</Text>
                    <Text style={{color : '#A9A9A9', fontSize: 12}}>Rp. 5000</Text>
                    <AirbnbRating
                        showRating={false}
                        count={5}
                        reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
                        defaultRating={4}
                        size={14}

                    />
                </View>
                <View style={{ width: 70}}>
                  <TouchableOpacity onPress={()=> alert('masuk ke map')}>
                    <Icon style={styles.iconmenu} type='MaterialIcons' name='place' />
                  </TouchableOpacity>
                </View>
            </CardItem>
        </Card>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    containerproduct : {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20
    },
    cardbox : {
        alignItems: 'flex-start'
    }, 
    iconmenu : {
      fontSize : 40,
      alignSelf: 'flex-end'
    },
    imageproduct : {
        height: 70,
        width: 70,
        borderRadius: 10,
    },
});

export default Product;
