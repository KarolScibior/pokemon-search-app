import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text, ImageBackground, Dimensions } from 'react-native';
import { ListItem, List } from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SearchResult = (props) => {
  const { data } = props;

  const renderPokemon = () => {
    if (!data) {
      return (
        <Text>Sorry, nothing was found...</Text>
      );
    } else {
      return (
        <>
          <Text style={styles.header}>#{data.id} - {data.name.toUpperCase()}</Text>
          <View style={styles.viewStyle}>
            <Image
              source={{uri: data.sprites.front_default}}
              style={styles.img}
            />
          </View>
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{fontWeight: 'bold'}}>Size</Text>
            </ListItem>
            <ListItem>
              <Text>Weight - {data.weight / 10} kg</Text>
            </ListItem>
            <ListItem>
              <Text>Height - {data.height / 10} m</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{fontWeight: 'bold'}}>Abilities</Text>
            </ListItem>
            <List
              dataArray={data.abilities}
              renderRow={(item) =>
                <ListItem>
                  <Text>{item.ability.name}</Text>
                </ListItem>
              }
            >
            </List>
            <ListItem itemDivider>
              <Text style={{fontWeight: 'bold'}}>Types</Text>
            </ListItem>
            <List
              dataArray={data.types}
              renderRow={(item) =>
                <ListItem>
                  <Text>{item.type.name}</Text>
                </ListItem>
              }
            >
            </List>
          </View>
        </>
      );
    }
  }

  return (
    <ImageBackground
      source={{uri: 'https://pokemongolive.com/img/posts/raids_loading.png'}}
      style={styles.backgroundImg}
    >
      <ScrollView style={styles.container}>
      {
        renderPokemon()
      }
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 200,
    height: 200
  },
  info: {
    flex: 1,
    backgroundColor: 'white',
    opacity: 0.8
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    height: height,
    width: width
  }
});

export default SearchResult;