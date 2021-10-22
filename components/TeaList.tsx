import React, {useState} from 'react'
import {Button, FlatList, Text, TextInput} from 'react-native'

const TeaList = () => {

  const [teas, setTeas] = useState<String[]>(['Camomila'])
  const [tea, setTea]   = useState<any>()

  const insetTea = () => {
    var arr = teas.concat(tea)
    setTeas(arr)
  }

  return (
    <>
      <TextInput 
        style={{borderColor: "green", borderWidth: 2, width: 100}} 
        onChangeText = {text => setTea(text)}
      />

      <Button 
        title = "Insert"
        onPress = {insetTea}
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