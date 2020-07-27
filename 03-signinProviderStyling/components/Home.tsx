import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image
} from 'react-native'

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
            <View style={styles.infoContainer}>
              <Image
                source={{ uri:'https://images.unsplash.com/photo-1595857819837-1c820f33e62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'}}
                style={styles.image}
              />
              <Text style={styles.label}>{user?.username ?? 'Default Name'}</Text>
            </View>
            <TouchableOpacity
              style={styles.signoutButton}
              onPress={() => {
                setUser(null)
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
  innerContainer: {
    backgroundColor: 'rgba(245, 241, 240, 0.5)',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: 400,
    height: 200,
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