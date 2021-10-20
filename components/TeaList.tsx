import React, {useState} from 'react'
import {FlatList, Text, TextInput} from 'react-native'

const TeaList = () => {

  const [teas, setTeas] = useState<any>('Camomila')

  return (
    <>
      <TextInput 
        onChangeText = {text => setTeas(text)}
      />

      <FlatList 
        data         = { teas }
        keyExtractor = { (item, index) => String(index)}
        renderItem   = { ({item}) => 
          <Text>
            {item}
          </Text> 
        }
      />
    </>
  )

}

export default TeaList