import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.example.app'
    };
  }

  onPressFeedback = () => {
    Linking.canOpenURL(this.state.playStoreUrl).then(supported => {
      if (supported) {
        Linking.openURL(this.state.playStoreUrl);
      } else {
        console.log('Don\'t know how to open URI: ' + this.state.playStoreUrl);
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPressFeedback}>
          <Text style={styles.buttonText}>Submit Feedback</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});