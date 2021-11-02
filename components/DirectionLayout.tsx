import React, {useState} from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type BlockInfo = {
  label: String
  values: String[]
  // flexDirection: String
  selectedValue: String
  setSelectedValue: Function
}

const DirectionLayout = () => {
  const [flexDirection, setFlexDirection] = useState("column")

  return (
    <PreviewLayout
      label="flexDirection"
      values={["column", "row", "row-reverse", "column-reverse"]}
      selectedValue={flexDirection}
      setSelectedValue={setFlexDirection}
    >

    
    </PreviewLayout>
  )

}

const PreviewLayout: React.FC<BlockInfo> = ({
  label, values, selectedValue, setSelectedValue
}) => (
  <View style={{padding: 10, flex: 1}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
    {values.map((value, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.button,
          selectedValue === value && styles.selected,
        ]}
        onPress={() => setSelectedValue(value)}>

          <Text>{value}</Text>
        
      </TouchableOpacity>
    ))}
    </View>
  </View>
)

const styles = StyleSheet.create({
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  box: {
    width: 50,
    height: 50,
  },
})

export default DirectionLayout