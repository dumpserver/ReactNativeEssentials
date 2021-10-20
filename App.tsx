import React, { useCallback, useState } from "react"
import {View, Text} from "react-native"
import ButtonReturnPlank from "./components/ButtonReturnPlank";
import ContactSectionList from "./components/ContactSectionList";
import FibonacciFlatList from "./components/FibonacciFlatList";
import SimpleButton from "./components/SimpleButton"
import SimpleScroll from "./components/SimpleScroll";
import TeaList from "./components/TeaList";
import TextChangeLabel from "./components/TextChangeLabel";

const DumpServer = () => {

  const [fatherText, setText] = useState('')
  const [plankConstant, setPlankConstant] = useState('')

  const fatherOnPress = () => {
    setText('Simple Button Clicked')
  }

  return (
    <View style={{paddingTop: 90, alignItems: "center"}}>

      <TeaList/>

    </View>
  )
}

export default DumpServer