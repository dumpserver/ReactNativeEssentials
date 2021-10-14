import React from "react";
import { SectionList, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
})

const ContactSectionList = () => {
  return (
    <SectionList
      sections={[
        {title: 'A', data: ['Ada', 'Adriel', 'Anderson', 'Adam']},
        {title: 'D', data: ['Davyd', 'Doug']},
        {title: 'L', data: ['Lovelace', 'Lovecraft', 'Low']}
      ]}
      renderItem={
        ({item}) => <Text>{item}</Text>
      }
      renderSectionHeader={
        ({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>
      }
      keyExtractor={(item, index) => String(index)}

    />
  )
}

export default ContactSectionList