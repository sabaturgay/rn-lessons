import React from 'react'
import { 
  Image, 
  TouchableOpacity, 
  Text
}  from 'react-native'


export type HistoryItemProps = {
  name: string;
  image: string;
  onDelete?: () => void;
  onPress?: () => void;
}

export const mockHistoryItem: HistoryItemProps = {
  name: 'Get Along',
  image: 'https://storage-2-eu.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/05/09193400/phrasal-verb-get-along.jpg'
}

export const HistoryItem = (props: HistoryItemProps) => {
  const { name, image, onDelete, onPress } = props
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#0099FF',
      }}
      onPress={() => onPress?.()}
    >
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          top: 0
        }}
        onPress={() => onDelete?.()}
      >
        <Image 
          style={{ width: 24, height: 24 }}
          source={{uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-round-512.png' }}
        />
      </TouchableOpacity>
      <Image 
        style={{
          width: 100,
          height: 100,
          marginBottom: 10,
          marginTop: 15,

        }}
        source={{ uri: image }}
      />
      <Text
        style={{
          fontSize: 20,
            fontWeight: 'bold',
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}