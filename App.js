import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './test1';
import Counter from './test2';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>this is my homework</Text>
      <Greeting name="world" />
      <Greeting name="people" />
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
