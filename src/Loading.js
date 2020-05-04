import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Loading = () => {

  return (
    <View style={styles.container}>
      <Image
					source={{uri: "https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
					style={styles.img}
				/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
  },
  img: {
    height: 300,
		width: 300
  }
});

export default Loading;