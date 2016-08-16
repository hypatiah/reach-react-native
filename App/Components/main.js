
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

var Next = require('./next')

class Main extends Component{

  constructor(props) {
    super(props);
  }

  _onPressButton(){

    console.log("AHHHH", this.props)
    console.log('BUTTON WORKING')
    this.props.navigator.push({
      title: 'Next',
      component: Next
    })
  }

  render() {
    console.log("rendering Main")
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
        R E A C H out with a simple tap.{'\n'}
        </Text>
        <Image source={require('../../reach_button.png')} style={{width: 300, height: 300}}/>
        <Text style={styles.instructions}>
        {'\n'}
        Preset SMS messages to send to your support network.
        </Text>
        <Text>
        When its time to reach out, simply open and{'\n'}
        R E A C H
        </Text>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


module.exports = Main;
