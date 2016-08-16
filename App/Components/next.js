
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Next extends Component{
  render() {
    console.log("rendering Main")
    return (
      <View style={styles.container}>
        <Text>WE MADE IT</Text>
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


module.exports = Next;
