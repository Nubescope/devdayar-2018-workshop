import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Speaker = ({ data: { name, image } }) => (
  <View style={styles.container}>
    <Image
      style={styles.image}
      source={{
        uri: image,
      }}
    />
    <View style={styles.info}>
      <Text style={styles.text}>{name}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },

  image: {
    width: 150,
    height: 150,
  },

  info: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 25,
  },
})

export default Speaker
