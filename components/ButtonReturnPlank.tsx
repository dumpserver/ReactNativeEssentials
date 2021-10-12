import React from 'react'
import {Button, View} from 'react-native'

const theConst : string = '6,62607004 × 10-34 m2 kg / s'

interface ButtonInterface {
  setValueFunction : any
}

const ButtonReturnPlank = ({setValueFunction}: ButtonInterface) => {

  const getConst = () => {
    setValueFunction(theConst)
  }

  return (
    <Button
      title   = "Get Plank"
      onPress = {getConst}
    />
  )

}

export default ButtonReturnPlank