import React, { useState } from 'react'
import {Text, TextInput} from 'react-native'

const TextChangeLabel = () => {
  const [text, setText] = useState('')

  return (
    <>
      <TextInput
        onChangeText={text => setText(text)}
      />
      <Text style={{fontSize:24}}>
        {text}
      </Text>
    </>
  )
}

export default TextChangeLabel