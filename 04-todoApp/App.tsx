import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import SigninProvider from './components/SigninProvider'
import Home from './components/Home'
import Signin from './components/Signin'
import * as R from './ramda'
import { b } from './run'
// SigninProvider
//   - Signin (setUser)
//   - Home (setUser, user)

export default function App() {
  console.log(R.add(5)(3))
  console.log(b())
  return (
    <SigninProvider
      Home={Home}
      Signin={Signin}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { backgroundColor: 'yellow' }
});
