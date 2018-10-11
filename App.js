import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        
        <MapView
          style={styles.mapa}
          region={{
            latitude:-7.2379005,
            longitude:-35.8858189,
            latitudeDelta:0.01,
            longitudeDelta:0.0121
          }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  mapa:{
    width: 300,
    height: 300
  }
});