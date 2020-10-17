import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WordDescription,  mockWordDescription }  from './components/WordDescription'
import { HistoryItem,  mockHistoryItem }  from './components/HistoryItem'

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
      <View style={{ height: 20 }}/>
      <HistoryItem 
        {...mockHistoryItem}
        onDelete={() => console.log('PropertyOnDelete')}
        onPress={() => console.log('PropertyOnPress')}
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
