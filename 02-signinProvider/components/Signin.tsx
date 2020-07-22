import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

type User = {
  username: string;
  password: string;
}

type SigninProps = {
  setUser: (user: User) => void;
}

export default function Signin(props: SigninProps) {
  const { setUser } = props
  const [state, setState] = React.useState({ username: '', password: '' })
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>Username</Text>
      <TextInput
        placeholder={"Enter username"}
        onChangeText={(username) => {
          setState({
            ...state,
            username
          })
        }}
        value={state.username}
      />
      <Text>Password</Text>
      <TextInput
        placeholder={"Enter password"}
        secureTextEntry
        onChangeText={(password) => {
          setState({
            ...state,
            password
          })
        }}
        value={state.password}
      />
      <TouchableOpacity
        onPress={() => {
          setUser(state)
        }}
      >
        <Text>Signin</Text>
      </TouchableOpacity>
    </View>
  )
}