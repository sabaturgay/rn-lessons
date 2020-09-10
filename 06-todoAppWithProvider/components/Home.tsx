import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  FlatList,
  AsyncStorage
} from 'react-native'
import TodoItem from './TodoItem'
import TopBar from './TopBar'
import { useSelector } from '../core/StoreProvider'
type User = {
  username: string;
  password: string;
}

type HomeProps = {
  user: User;
  setUser: (user: User|null) => void;
}

const TODO_LIST_KEY = 'TODO_LIST_KEY'
const TODO_HISTORY_NAME = 'TODO_HISTORY_NAME'

export default function Home(props: HomeProps) {
  const [store, updateStore, storeRef] = useSelector((state) => state)
  const [state, setState] = React.useState({
    currentTodo: ''
  })
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1595855524159-6a89fe9fa0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
      }}
      style={StyleSheet.absoluteFillObject}
      >
        <TopBar 
          user={{
            imageURL: 'https://images.unsplash.com/photo-1595857819837-1c820f33e62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            username: store.user?.username
          }}
        />
      <View style={styles.container}>
        <View
          style={styles.innerContainer}
        >
          <View>
            <View style={styles.todoContainer}>
              <View
              style={{
                flexDirection: 'row'
              }}>
                <TextInput 
                  style={{
                    flex: 2,
                    marginRight: 20
                  }}
                  placeholder="Enter Todo"
                  onChangeText={(todo) => {
                    setState({
                      ...state,
                      currentTodo: todo
                    })
                  }}
                  value={state.currentTodo}
                />
                <TouchableOpacity
                  style={{ flex: 1, backgroundColor: 'blue', borderRadius: 20, alignItems: 'center' }}
                  onPress={() =>{
                    updateStore((draft)=>{
                      draft.todoList.push(state.currentTodo)
                      return {
                        historyName: TODO_HISTORY_NAME
                      }
                    })
                    setState({
                      ...state,
                      currentTodo: ''
                    })
                  }}
                >
                  <Text style={styles.signoutText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, backgroundColor: 'blue', borderRadius: 20, alignItems: 'center' }}
                  onPress={() =>{
                    updateStore(storeRef.history.undo(TODO_HISTORY_NAME))
                  }}
                >
                  <Text style={styles.signoutText}>Undo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ flex: 1, backgroundColor: 'blue', borderRadius: 20, alignItems: 'center' }}
                  onPress={() => {
                    updateStore(storeRef.history.redo(TODO_HISTORY_NAME))
                  }}
                >
                  <Text style={styles.signoutText}>Redo</Text>
                </TouchableOpacity>
              </View>
              <FlatList 
                style={{
                  marginTop: 20,
                }}
                data={store.todoList}
                ItemSeparatorComponent={() => (
                  <View style={{height: 10}}/>
                )}
                renderItem={({ item, index }) => (
                  <TodoItem 
                    key={item}
                    todo={item}
                    onDelete={() => {
                      updateStore((draft) => {
                        draft.todoList.splice(index, 1)
                        return {
                          historyName: TODO_HISTORY_NAME
                        }
                      })
                      setState({
                        ...state,
                      })
                    }}
                  />
                )}
              />
            </View>
            <TouchableOpacity
              style={styles.signoutButton}
              onPress={() => {
                // setUser(null)
                updateStore((draft) => {
                  draft.user = null
                })
              }}
            >
              <Text style={styles.signoutText}>Signout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoContainer: {
    marginBottom: 20
  },
  innerContainer: {
    backgroundColor: 'rgba(245, 241, 240, 0.5)',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 400,
    // height: 200,
    borderRadius: 30
  },
  label: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  signoutText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  textInput: {
    marginBottom: 10,
    fontSize: 18
  },
  signoutButton: {
    backgroundColor: '#c4291d',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  }
})



// {
//   user:{},
//   todoList: []
// }
// userReducer (action, draft) => {
//   switch (action.type) {
//     case 'ADD':
//         return [...draft, action.payload ]
//       break;
//     case 'REMOVE':
//         return null
//       break;
  
//     default:
//       break;
//   }
// }