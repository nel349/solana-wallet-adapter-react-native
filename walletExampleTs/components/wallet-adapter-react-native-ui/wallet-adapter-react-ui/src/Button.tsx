import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ButtonProps,
  TouchableHighlight,
  Text,
  Alert,
} from 'react-native';

export default class Button extends Component<ButtonProps> {
  _onPressButton() {
    Alert.alert('You tapped the button!');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.props.onPress} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.title}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
