import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Other Screen',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>This is the Links Screen</Text>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
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
