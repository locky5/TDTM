import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar
} from 'react-native'

import MatchPage from './MatchPage.js'

class Matches extends React.Component {

  state = {
    matches: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/matches')
      .then(res => res.json())
      .then(matches => {
        let yourMatches
        if (this.props.user) {
          yourMatches = matches.filter(match => match.user_id === this.props.user.id)
        } else {
          yourMatches = matches
        }
        this.setState({
          matches: yourMatches
        })
      })
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
      >
        {this.state.matches ? this.state.matches.map(match => <MatchPage match={match}/>) : null}
      </ScrollView>
    )
  }
}

export default Matches
