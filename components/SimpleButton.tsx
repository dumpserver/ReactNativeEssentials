import React, { useState, useCallback } from "react"
import {Button} from "react-native"

interface SimpleButtonInterface{
  onPress: any;
}
/**
 * 
 * @param onPress function for onPress button
 * @returns 
 */
const SimpleButton = ({onPress}: SimpleButtonInterface) => {

    return (
      <Button 
        onPress = {onPress}
        title = 'Simple Button'
      />
    )
}

export default SimpleButton