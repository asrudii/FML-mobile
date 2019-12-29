import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Card, CardItem } from 'native-base';


class Kategori extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{alignSelf: 'flex-start', color: '#707070', fontSize: 12}}>kategori ter</Text>
        <View style={styles.kategori}>
            <View style={{flexDirection: 'row'}}>
                <Card style={styles.kategoribox}>
                    <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                        <Image style={styles.imagemenu} source={require('../image/icon/love.jpg')} />
                        <Text style={styles.textkategori}>terfavorit</Text>
                    </CardItem>
                </Card>
                <Card style={styles.kategoribox}>
                <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                        <Image style={styles.imagemenu} source={require('../image/icon/like.jpg')} />
                        <Text style={styles.textkategori}>terpopuler</Text>
                    </CardItem>
                </Card>
            </View>       
            <View style={{flexDirection: 'row'}}>
                <Card style={styles.kategoribox}>
                    <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                        <Image style={styles.imagemenu} source={require('../image/icon/clock.jpg')} />
                        <Text style={styles.textkategori}>terbaru</Text>
                    </CardItem>
                </Card>
                <Card style={styles.kategoribox}>
                <CardItem style={{flexDirection: 'column'}} header button onPress={() => alert("This is Card Header")}>
                        <Image style={styles.imagemenu} source={require('../image/icon/galau.jpg')} />
                        <Text style={styles.textkategori}>tergalau</Text>
                    </CardItem>
                </Card>
            </View>              
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    imagemenu : {
        height: 80,
        width: 80,
        borderRadius: 20,
        marginBottom: 5
    },
    textkategori : {
        color : '#bbb'
    },
    kategori : {
        flex: 1,
        flexDirection: 'column', 
        alignItems: 'flex-start',
        paddingVertical: 10
    },
    kategoribox : {
        width: 140,
        height: 140,
        margin : 10,
    },
})

export default Kategori;
