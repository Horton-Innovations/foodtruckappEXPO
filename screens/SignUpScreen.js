import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign Up',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Here is where you sign up</Text>
      </View>
    );
  }

//   _signInAsync = async () => {
//     await AsyncStorage.setItem('userToken', 'abc');
//     this.props.navigation.navigate('App');
//   };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});