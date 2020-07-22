import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

type User = {
  username: string;
  password: string;
}

type HomeProps = {
  user: User;
  setUser: (user: User|null) => void;
}

export default function Home(props: HomeProps) {
  const { user, setUser } = props
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>{user.username}</Text>
      <TouchableOpacity
        onPress={() => {
          setUser(null)
        }}
      >
        <Text>Signout</Text>
      </TouchableOpacity>
    </View>
  )
}