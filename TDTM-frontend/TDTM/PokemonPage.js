import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Dimensions
} from 'react-native'

class PokemonPage extends React.Component {

  state = {
    screenWidth: Dimensions.get('window').width
  }

  render() {
    {console.warn(this.props.pokemon.url.split('/')[this.props.pokemon.url.split('/').length - 2])}
    return (
      <View
        key={this.props.pokemon.url.split('/')[this.props.pokemon.url.split('/').length - 2]}
        style={{width: this.state.screenWidth}}
      >
        <Text>
          {this.props.pokemon ? this.props.pokemon.name : null}
        </Text>
      </View>
    )
  }
}

export default PokemonPage
