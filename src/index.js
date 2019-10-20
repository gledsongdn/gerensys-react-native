import React, { Component } from 'react';
import * as Font from 'expo-font';
import { ActivityIndicator, StatusBar, StyleSheet, Platform, View } from 'react-native';
import RegisterPessoa from './pages/RegisterPessoa';

export default class App extends Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    isReady: false
  }

  componentWillMount = async() => {
    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
    })
    this.setState({ isReady: true })
  }
  render() {
    if (!this.state.isReady) {
      return <ActivityIndicator />
    }
    return (
      <View style={styles.container}>
        <RegisterPessoa />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
          flex: 1,
          ...Platform.select({
              android: {
                  marginTop: StatusBar.currentHeight
              }
          })

      }
})
