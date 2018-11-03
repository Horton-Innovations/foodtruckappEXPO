import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    _SignIn = () => {
      console.log("SIgnIn")
    }

    _SignUp = () => {
      console.log("Sign Up")
    }

    return (
      <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/ftlogo.png')}
              style={styles.welcomeImage}
            />
          </View>
          <Button 
            style={styles.button}
            title="Sign Up"
            onPress={_SignIn}
          />
          <Button 
            style={styles.button}
            title="Sign in"
            onPress={_SignUp}
          />

      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe4e00',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 250,
    height: 700,
    resizeMode: 'contain',
    marginTop: 5,
    marginLeft: -10,
  },
  button: {
    height: 50,
    width: 25,
    backgroundColor: '#618884',

  }
  // tabBarInfoContainer: {
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: 'black',
  //       shadowOffset: { height: -3 },
  //       shadowOpacity: 0.1,
  //       shadowRadius: 3,
  //     },
  //     android: {
  //       elevation: 20,
  //     },
  //   }),
  //   alignItems: 'center',
  //   backgroundColor: '#fbfbfb',
  //   paddingVertical: 20,
  // },
});
