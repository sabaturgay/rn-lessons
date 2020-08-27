import React from 'react'
import { 
  View,
  Image,
  Text
} from 'react-native'

type Props = {
  user: {
    username: string;
    imageURL: string
  }
}
export default (props: Props) => {
  const {
    user
  } = props
  return (
    <View 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: 'white',
        flexDirection: 'row'
      }}
    >
      <Image 
        source={{ uri: user.imageURL}}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25
        }}
      />
      <Text 
        style={{
          marginLeft: 15,
          marginBottom: 10,
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        {user.username}
      </Text>
    </View>
  )
}