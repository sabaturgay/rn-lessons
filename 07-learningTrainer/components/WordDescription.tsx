import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'

export type WordDescriptionProps = {
  name: string;
  descriptionList: string[];
  imageList: string[];
  onImageSelect?: (url: string) => void
}

export const mockWordDescription: WordDescriptionProps = {
  name: 'Get Along',
  descriptionList: [
    `have a harmonious or friendly relationship.
    ""they seem to get along pretty well""`,
    `manage to live or survive.
    "don't worry, we'll get along without you"`
  ],
  imageList: [
    'https://storage-2-eu.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2019/05/09193400/phrasal-verb-get-along.jpg',
    'https://www.wikihow.com/images/thumb/a/aa/Get-Along-with-Your-Kids-Step-7-Version-2.jpg/v4-460px-Get-Along-with-Your-Kids-Step-7-Version-2.jpg.webp'
  ]
}

export const WordDescription = (props: WordDescriptionProps) => {
  const {
    descriptionList,
    imageList,
    name,
    onImageSelect = (url: string) => {}
  } = props
  return (
    <View style={{
      backgroundColor:'#0099FF',
      padding: 15
    }}>
      <FlatList 
        style={{
          backgroundColor:'#0099FF',
          marginBottom: 15,
        }}
        data={imageList}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onImageSelect(item)}
          >
            <Image
              style={{
                width: 100,
                height: 100
              }}
              source={{ uri: item }}
            />
          </TouchableOpacity>
        )}
      />
      <View style={{
        backgroundColor:'#0099FF',
        padding: 10
      }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10
          }}
        >{name}</Text>
        <FlatList 
          data={descriptionList}
          renderItem={({ item }) => (
            <Text
              style={{
                fontSize: 15
              }}
            >
              {item}
            </Text>
          )}
        />
      </View>
    </View>
  )
}