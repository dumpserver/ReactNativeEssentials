import React, { useCallback, useState } from "react"
import {View, Text} from "react-native"
import ButtonReturnPlank from "./components/ButtonReturnPlank";
import SimpleButton from "./components/SimpleButton"
import SimpleScroll from "./components/SimpleScroll";
import TextChangeLabel from "./components/TextChangeLabel";

const DumpServer = () => {

  const [fatherText, setText] = useState('')
  const [plankConstant, setPlankConstant] = useState('')

  const fatherOnPress = () => {
    setText('Simple Button Clicked')
  }

  return (
    <View style={{paddingTop: 90, alignItems: "center"}}>
      <SimpleButton 
        onPress = {fatherOnPress}
      />
      <Text>{fatherText}</Text>

      <ButtonReturnPlank
        setValueFunction = {setPlankConstant}
      />
      <Text>{plankConstant}</Text>

      <TextChangeLabel/>

      <SimpleScroll/>

    </View>
  )
}

export default DumpServer