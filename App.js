import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'

export default function App() {
  return (
    <View style={styles.container}>
        <Navbar />
        <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({

});
