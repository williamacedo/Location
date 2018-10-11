import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class App extends Component {

  constructor(props) {

    super(props);
  
    this.state = {};

    this.posicao = this.posicao.bind(this);
    this.posicaoMonitorar = this.posicaoMonitorar.bind(this);
  }

  posicao() {

    navigator.geolocation.getCurrentPosition((data) => {
     //lert("Pegou a localização");
      //alert(JSON.stringify(data));

      let latitude = data.coords.latitude;
      let longitude = data.coords.longitude;
      let accuracy = data.coords.accuracy;

      alert(latitude+"  x "+longitude+" x "+accuracy);
    }, 
    () => {
      alert("Deu algum erro");
    });

  }

  posicaoMonitorar() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Pegar Posição" onPress={this.posicao} />

        <Button title="Monitorar Posição" onPress={this.posicaoMonitorar} />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});