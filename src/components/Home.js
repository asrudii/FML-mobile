import React, { Component } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Header from './Header';
import Menu from './Menu';
import Kategori from './Kategori';
import Product from './Product';



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
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Header */}
                    <Header 
                        keranjang={() => this.props.navigation.navigate('Keranjang')} 
                        user={() => this.props.navigation.navigate('User')}
                    />    

                    {/* Menu */}
                    <Menu />

                    {/* Kategori ter */}
                    <Product />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
      flex:1,
      flexDirection : 'column',
      alignItems: 'center',
      padding : 20
    },     
})

export default Home;