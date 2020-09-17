import React from 'react'
import { StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ImageBackground
 } from 'react-native'
import { useSelector } from '../core/StoreProvider'
type User = {
  username: string;
  password: string;
}

type SigninProps = {
  setUser: (user: User) => void;
}

export default function Signin(props: SigninProps) {
  const [, updateState] = useSelector((state) => {return null})
  const [state, setState] = React.useState({ username: '', password: '' })
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1595855524159-6a89fe9fa0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }}
      style={StyleSheet.absoluteFillObject}
      >
      <View style={styles.container}>
        <View
          style={styles.innerContainer}
        >
          <View>
          <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Enter username"}
              onChangeText={(username) => {
                setState({
                  ...state,
                  username
                })
              }}
              value={state.username}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.textInput}
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
              style={styles.signinButton}
              onPress={async () => {
                updateState((draft) => {
                  draft.user = state
                })
                // await signup(updateState)
                
                // setStore({
                //   user: state
                // })
              }}
            >
              <Text style={styles.signinText}>Signin</Text>
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
  innerContainer: {
    backgroundColor: 'rgba(245, 241, 240, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 400,
    height: 200,
    borderRadius: 30
  },
  label: {
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  signinText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textInput: {
    marginBottom: 10,
    fontSize: 18
  },
  signinButton: {
    backgroundColor: '#3486eb',
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})