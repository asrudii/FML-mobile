import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, AsyncStorage, FlatList, Text} from 'react-native';
import Header from './Header';
import Menu from './Menu';
import Kategori from './Kategori';
import Product from './Product';


import axios from 'axios';



class Home extends Component {
    static navigationOptions = {
        header: null
      };
    constructor(props) {
        super(props);
        this.state = {
            produk: [],
            minuman : [],
            menu : 'minuman'
        }
        this.minuman = this.minuman.bind(this);
        this.makanan = this.makanan.bind(this);
    }

    componentDidMount () {
        
        axios.get('https://fmlserv.herokuapp.com/api/makanan')
        .then(Response => {
            const dataproduk = Response.data;
            this.setState({
                produk : dataproduk,
                namaproduk : '',
                idproduk: '',
                hargaproduk: ''

            })
        })
        .catch(err => {
            console.warn(err)
        })

        axios.get('https://fmlserv.herokuapp.com/api/minuman')
        .then(res => {
            const minum = res.data;
            this.setState({
                minuman : minum

            })
        })
        .catch(err => {
            console.warn(err)
        })
    }

    pesan = async () => {
        let datapesanan = {
        //   namaproduk : this.state.namaproduk,
        //   idproduk: this.state.idproduk,
        //   hargaproduk: this.state.hargaproduk
          namaproduk : 'thaitea',
          idproduk: 1142,
          hargaproduk: 2000
        };
    
        try {
          AsyncStorage.setItem('pesanan', JSON.stringify(datapesanan));
          
          this.props.navigation.navigate('Keranjang');    
        
        } catch (err) {
            alert(err);
        }
      }


    renderItem = ({ item }) => (
        <Product 
            penjual={() => this.props.navigation.navigate('Penjual')}
            idproduk={item.id_makanan}
            namaproduk={item.nama_makanan}
            hargaproduk={item.harga_makanan}
            pesan={this.pesan}
        />
        
    )
    renderItem2 = ({ item }) => (
        <Product 
            penjual={() => this.props.navigation.navigate('Penjual')}
            idproduk={item.id_minuman}
            namaproduk={item.nama_minuman}
            hargaproduk={item.harga_minuman}
            pesan={this.pesan}
        />
    )

    makanan = (e) => {
        this.setState({
            menu : 'makanan'
        })
        this.menu()
    }

    minuman = (e) => {
        this.setState({
            menu : 'minuman'
        })
        this.menu()
    }

    menu = (e) => {
        if (this.state.menu === 'makanan') { 
            return (
                <FlatList
                    data={this.state.produk}
                    keyExtractor={item => item.id_makanan}
                    renderItem={this.renderItem}
                />
            )
    
        }else {
            return (
                <FlatList
                    data={this.state.minuman}
                    keyExtractor={item => item.id_minuman}
                    renderItem={this.renderItem2}
                />
            )
        }
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
                    <Menu 
                        minuman={this.minuman}
                        makanan={this.makanan}
                    />

                    {/* Kategori ter */}
                    {/* <Kategori /> */}

                    {/* {this.menu} */}
                    {this.menu()}
                    

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