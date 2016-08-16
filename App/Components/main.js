
import React, { Component } from 'react';
import Button from 'react-native-button';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

var Register = require('./register')

class Main extends Component{

  constructor(props) {
    super(props);
  }

  _onPressButton(){

    console.log("AHHHH", this.props)
    console.log('BUTTON WORKING')
    this.props.navigator.push({
      title: 'Register',
      component: Register
    })
  }

  render() {
    console.log("rendering Main")
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          R E A C H out with a simple tap.{'\n'}{'\n'}
        </Text>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Image source={require('../../reach_button.png')} style={{width: 300, height: 300}}/>
        </TouchableHighlight>
        <Text style={styles.instructions}>
          {'\n'}
          Preset SMS messages to send to your support network.
        </Text>
        <Text>
          When its time to reach out, simply open and
        </Text>
        <Text>
           R E A C H {'\n'}{'\n'}
        </Text>
          <Button
            style={{fontSize: 20, color: 'red'}}
            styleDisabled={{color:'pink'}}
            onPress={this._onPressButton.bind(this)}>
            Register
          </Button>
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
