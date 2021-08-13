import { StatusBar } from "expo-status-bar";
import React from "react";
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { MyView } from "expo-custom";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from the application</Text>
      <MapView style={styles.map} />
      <MyView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
