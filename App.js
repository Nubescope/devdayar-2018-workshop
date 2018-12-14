import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/logo-dev-day.png')} style={styles.logo} />
        <Text style={styles.text}>2018</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    transform: [{ scale: 0.8 }],
  },

  text: {
    color: '#242352',
    fontSize: 45,
    fontWeight: '400',
  },
})
