import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WordDescription,  mockWordDescription }  from './components/WordDescription'

export default function App() {
  return (
    <View style={styles.container}>
      <WordDescription 
        // name={mockWordDescription.name}
        // descriptionList={mockWordDescription.descriptionList}
        // imageList={mockWordDescription.imageList}
        {...mockWordDescription}
        onImageSelect={(url) => {
          console.log(url)
        }}
      />
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
