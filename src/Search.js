import React, { useState} from 'react';
import { StyleSheet, View, Text, ToastAndroid } from 'react-native';
import { Header, Item, Input, Icon, Button, Toast } from 'native-base';
import axios from 'axios';
import Loading from './Loading';
import SearchResult from './SearchResult';

const Search = (props) => {
  const [pokeSearch, setPokeSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const { switchScreen } = props;

  const searchPoke = () => {
    setLoading(true);
     axios.get('http://pokeapi.co/api/v2/pokemon/' + pokeSearch.toLowerCase())
      .then(res => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        ToastAndroid.show('Pokemon not found!', ToastAndroid.SHORT);
        console.log(e);
      });
  }

  const renderBody = () => {
    if (loading) {
      return (
        <Loading />
      )
    } else {
      return (
        <SearchResult data={data} />
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header
        searchBar
        rounded
      >
        <Item>
          <Icon
           name={'search'}
           onPress={searchPoke}
          />
          <Input
            value={pokeSearch}
            placeholder="Search Pokemon"
            onChangeText={(text) => setPokeSearch(text)}
            onSubmitEditing={searchPoke}
          />
        </Item>
      </Header>
      {
        renderBody()
      }
      <Button
        block={true}
        style={styles.button}
        onPress={() => switchScreen('landing')}
      >
        <Text style={styles.buttonText}>Back</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    margin: 12
  },
  buttonText: {
    color: 'white'
  }
});

export default Search;