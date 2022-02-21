import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, {Component } from 'react';

class Inputs extends Component {
  state = {
    angkapertama: '',
    angkakedua: '',
    hasil: '',
    hasilTulisan: '',
  }
  handleAngka1 = (text) => {
    this.setState({ angkapertama: text })
  }
  handleAngka2 = (text) => {
    this.setState({ angkakedua: text })
  }
  perkalian = (angkapertama, angkakedua) => {
    var hasilkali = (parseFloat(angkapertama)) * (parseFloat(angkakedua));
    hasilkali = hasilkali.toFixed(2);
    if (isNaN(hasilkali)) {
      alert('Incorrect Input!');
      this.setState({hasil: ''})
      this.setState({hasilTulisan: 'Please input the first and second numbers'})
    }
    else{
      this.setState({hasil: hasilkali})
      this.setState({hasilTulisan: 'Result'})
    }
  }
  pembagian = (angkapertama, angkakedua) => {
    var hasilbagi = (parseFloat(angkapertama)) / (parseFloat(angkakedua));
    hasilbagi = hasilbagi.toFixed(2);
    if (isNaN(hasilbagi)) {
      alert('Incorrect Input!');
      this.setState({hasil: ''})
      this.setState({hasilTulisan: 'Please input the first and second numbers'})
    }
    else{
      this.setState({hasil: hasilbagi})
      this.setState({hasilTulisan: 'Result'})
    }
  }
  penjumlahan = (angkapertama, angkakedua) => {
    var hasiljumlah = (parseFloat(angkapertama)) + (parseFloat(angkakedua));
    hasiljumlah = hasiljumlah.toFixed(2);
    if (isNaN(hasiljumlah)) {
      alert('Incorrect Input!');
      this.setState({hasil: ''})
      this.setState({hasilTulisan: 'Please input the first and second numbers'})
    }
    else{
      this.setState({hasil: hasiljumlah})
      this.setState({hasilTulisan: 'Result'})
    }
  }
  pengurangan = (angkapertama, angkakedua) => {
    var hasilkurang = (parseFloat(angkapertama)) - (parseFloat(angkakedua));
    hasilkurang = hasilkurang.toFixed(2);
    if (isNaN(hasilkurang)) {
      alert('Incorrect Input!');
      this.setState({hasil: ''})
      this.setState({hasilTulisan: 'Please input the first and second numbers'})
    }
    else{
      this.setState({hasil: hasilkurang})
      this.setState({hasilTulisan: 'Result'})
    }
  }
  render() {
    return (
       <View style = {styles.container}>
         <View style={styles.header}>
          <Text style={styles.title}>Simple Calculator</Text>
         </View>
         <View style={styles.isi}>
          <Text  style = {styles.label}>First Number</Text>
            <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "insert the first number"
            autoCapitalize = "none"
            onChangeText = {this.handleAngka1}
            />
            <Text  style = {styles.label}>Second Number</Text>
            <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "insert the second number"
              autoCapitalize = "none"
              onChangeText = {this.handleAngka2}
            />
            <View style = {styles.ngaturtombol}>
              <TouchableOpacity
                style = {styles.tombolHitung}
                onPress = {
                  () => this.perkalian(this.state.angkapertama, this.state.angkakedua)
              }>
                <Text style = {styles.isiTombol}>
                  *
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {styles.tombolHitung}
                onPress = {
                  () => this.pembagian(this.state.angkapertama, this.state.angkakedua)
              }>
                <Text style = {styles.isiTombol}>
                  /
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {styles.tombolHitung}
                onPress = {
                  () => this.penjumlahan(this.state.angkapertama, this.state.angkakedua)
              }>
                <Text style = {styles.isiTombol}>
                  +
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style = {styles.tombolHitung}
                onPress = {
                  () => this.pengurangan(this.state.angkapertama, this.state.angkakedua)
              }>
                <Text style = {styles.isiTombol}>
                  -
                </Text>
              </TouchableOpacity>
            </View>
          
          <Text style = {styles.resultText}>
            {this.state.hasilTulisan}
          </Text>
          <Text style = {styles.output}>
            {this.state.hasil}
          </Text>
         </View>

      </View>
    )
 }
}
export default Inputs
const styles = StyleSheet.create({
 container: {
    paddingTop: 23,
    
 },
 header: {
   flex: 2,
   alignContent: "flex-end",
 },
 isi: {
   flex: 3,
 },
 input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    padding: 10,
 },
 submitButton: {
    backgroundColor: '#ff6666',
    padding: 10,
    margin: 15,
    height: 40,
 },
 submitButtonText:{
    textAlign: "center",
    textAlignVertical: 'center',
    color: 'white',
   // fontWeight:"bold",
    fontSize: 18,
 },
 output:{
    textAlign: "center",
    fontSize: 30,
 },
 title:{
    paddingTop:30,
    paddingBottom:10,
    textAlign: "center",
    fontSize: 30,
    fontWeight:"bold",
 },
 resultText:{
    paddingTop:20,
    paddingBottom:10,
    textAlign: "center",
    fontSize: 30,
 },
 label:{
    marginLeft: 15,
 },
 tombolHitung:{
  backgroundColor: '#ff6666',
  // padding: 10,
  margin: 15,
  height: 40,
  flex: 4,
  borderRadius: 15,
 },
 isiTombol:{
   textAlign: 'center',
   marginVertical: 5,
   color: 'white',
   fontWeight:"bold",
    fontSize: 18,
 },
 ngaturtombol:{
   flexDirection: 'row',
   justifyContent: 'center'
 }
})