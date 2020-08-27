import React from 'react'
import { 
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'

type TodoItemProps = {
  todo: string;
  onDelete: () => void
}
export default (props: TodoItemProps) => {
  const { todo, onDelete } = props
  return (
    <View style={styles.container}>
      <Text style={styles.todo}>{todo}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={onDelete}
      >
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcba03',
    flexDirection: 'row'
  },
  todo: {
    flex: 2,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  deleteButton: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  deleteText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  }
})