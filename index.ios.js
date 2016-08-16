/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Main from './App/Components/main';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

class Reachastra extends Component {
  render() {
    return (
      // <View>
      // <Text> Hello world </Text>
      // </View>
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'reachastra',
          component: Main
        }} />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});


AppRegistry.registerComponent('reachastra', () => Reachastra);
module.exports = Reachastra;
