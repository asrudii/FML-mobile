import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Thumbnail, Text, Tab, Tabs, TabHeading, Icon  } from 'native-base';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* image profil */}
        <View style={styles.userimage}>
            <Thumbnail large source={require('../image/user/user1.jpg')} />
        </View>
        
        {/* konten profil */}
        <View style={styles.kontenprofil}>
            <Tabs>
                <Tab heading={ <TabHeading><Text>Camera</Text></TabHeading>}>
                    <Text>sd</Text>
                </Tab>
                <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                    <Text>ljalksfl</Text>
                </Tab>
            </Tabs>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : 'column',
        paddingTop: 0
    },
    userimage : {
        padding : 20,
        flex: 0.5,
        alignItems: 'center',
        justifyContent : 'center',
    },
    kontenprofil : {
        flex: 1,
        padding : 20
    }


});

export default User;
