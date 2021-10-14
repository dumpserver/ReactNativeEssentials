import React, { useCallback, useState } from "react"
import {View, Text} from "react-native"
import ButtonReturnPlank from "./components/ButtonReturnPlank";
import FibonacciFlatList from "./components/FibonacciFlatList";
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

      <FibonacciFlatList/>

    </View>
  )
}

export default DumpServer