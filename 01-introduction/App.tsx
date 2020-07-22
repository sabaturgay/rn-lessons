import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  const [state, setState] = React.useState({
    data: [{ name: 'Ahmet' }, { name: 'Ayse' }],
    currentName: ''
  }) //  { id: 123, data}
  return (
    <View style={styles.container}>
      {
        state.data.map((item) => {
          return (<Text key={item.name}>{item.name}</Text>)
        })
      }
      <TextInput
        placeholder={"Enter Name"}
        onChangeText={(name) => {
          setState({
            ...state,
            currentName: name
          })
        }}
        value={state.currentName}
      />

      <TouchableOpacity
        onPress={() => {
          setState({
            data: [...state.data, { name: state.currentName }],
            currentName: ''
          })
        }}
        style={styles.button}
      >
        <Text>Add</Text>
      </TouchableOpacity>
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
  button: { backgroundColor: 'yellow' }
});
