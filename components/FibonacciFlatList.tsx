import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'

const fibonacci: { key: string }[] = [
  { key: '1' },
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '5' },
  { key: '8' },
  { key: '13' },
  { key: '21' },
  { key: '34' },
  { key: '55' },
  { key: '89' },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 60,
    height: 100
  }
})

const FibonacciFlatList = () => {
  return (
    <FlatList
      data={fibonacci}
      keyExtractor={(item, index) => String(index)} // This solves duplicate componente key problem.
      renderItem={({ item }) =>
        <Text style={styles.item}>
          {item.key}
        </Text>
      }
    />
  )
}

export default FibonacciFlatList
