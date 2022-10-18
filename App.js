import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.heading} >Hello World</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    color: "white"
  }
})

export default App