import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions,
} from 'react-native'
import ViewPager from '@react-native-community/viewpager'

import PokemonPage from './PokemonPage.js'

class SlideShow extends React.Component {

  state = {
    pokemon: null,
    screenWidth: Dimensions.get('window').width
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(res => res.json())
      .then(pokemons => {
        this.setState({
          pokemon: pokemons
        })
      })
  }

  getViews = () => {
    let string = ''
    if (this.state.pokemon) {
      for (let i = 0; i < this.state.pokemon.results.length; i++) {
        string += this.returnView(this.state.pokemon.results[i])
      }
    }
    return string
  }

  returnView = (pokemon) => {
    return (
      <View
        key={pokemon.url.split('/')[pokemon.url.split('/').length - 2]}
        style={{width: this.state.screenWidth}}
      >
        <Text>
          {pokemon ? pokemon.name : null}
        </Text>
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
      >
        {this.state.pokemon ? this.state.pokemon.results.map(pokemon => <PokemonPage pokemon={pokemon}/>) : null}
      </ScrollView>
    )
  }
}

export default SlideShow
