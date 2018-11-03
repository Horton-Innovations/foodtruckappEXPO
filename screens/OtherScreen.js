import React from 'react';
import { ScrollView, StyleSheet, Text, StatusBar, Button, AsyncStorage } from 'react-native';

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Screen',
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {

    return (
      <ScrollView style={styles.container}>
      <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
