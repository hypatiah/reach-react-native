
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
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
        <Text>HEY THERE</Text>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Text>PRESS MEE</Text>
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
