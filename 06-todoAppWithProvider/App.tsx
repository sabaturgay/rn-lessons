import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import SigninProvider from './components/SigninProvider'
import Home from './components/Home'
import Signin from './components/Signin'
import { Provider, useSelector } from './core/StoreProvider'

let counter = 0

const Selection = () => {
  const [user, updateStore] = useSelector((state) => {
    return {
      name: state.user?.username
    }
  })
  updateStore((draft) => {
    draft.user = {
      username: 'ts',
      password: '123'
    }
  })
  counter += 1
  return <View style={{ position: 'absolute', left: 0, top: 0, backgroundColor: 'white'}}>
    <Text>{counter}</Text>
  </View>
}


export default function App() {
  return (
    <Provider>
      <SigninProvider
        Home={Home}
        Signin={Signin}
      />
      <Selection/>
    </Provider>
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
