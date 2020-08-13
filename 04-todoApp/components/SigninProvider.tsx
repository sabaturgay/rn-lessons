import React from 'react'
import { AsyncStorage } from 'react-native'

export type SigninProviderProps = {
  Signin: React.FC;
  Home: React.FC;
}

export default function SigninProvider(props: SigninProviderProps) {
  const { Home, Signin } = props
  const [user, setUserData] = React.useState(null)
  React.useEffect(() => {
    AsyncStorage.getItem('user', (error, result) => {
      setUserData(result ? JSON.parse(result) : null)
    })
  }, [])
  const setUser = React.useCallback((userData) => {
    AsyncStorage.setItem('user', JSON.stringify(userData))
    setUserData(userData)
  }, [])
  if (user) {
    return (
      <Home
        user={user}
        setUser={setUser}
      />
    )
  }
  return (
    <Signin
      setUser={setUser}
    />
  )
}