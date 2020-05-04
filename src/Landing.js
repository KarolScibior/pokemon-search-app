import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { Button } from 'native-base';

const background = require('../assets/landing.jpg');

const Landing = (props) => {
  const { switchScreen } = props;

  return (
    <View>
      <ImageBackground
        source={background}
        style={styles.background}
      >
        <View style={styles.landing}>
          <Text style={styles.title}>Welcome to Pokemon Search</Text>
          <Button
            block={true}
            style={styles.button}
            onPress={() => {switchScreen('search')}}
          >
            <Text style={styles.buttonText}>Let's go!</Text>
          </Button>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%'
  },
  landing: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  },
  button: {
    margin: 12
  },
  buttonText: {
    color: 'white'
  }
});

export default Landing;