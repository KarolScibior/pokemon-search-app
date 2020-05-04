import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './src/Landing';
import Search from './src/Search';



const App = () => {
  const [page, setPage] = useState('landing');

  const switchScreen = (screen) => {
    setPage(screen);
  }

  const renderScreen = () => {
    if (page === 'landing') {
      return (
        <Landing switchScreen={switchScreen}/>
      );
    } else if (page === 'search') {
      return (
        <Search switchScreen={switchScreen}/>
      );
    }
  }

  return (
    <View style={styles.container}>
      {
        renderScreen()
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;