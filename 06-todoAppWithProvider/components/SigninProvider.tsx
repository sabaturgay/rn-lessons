import React from 'react'
import { AsyncStorage } from 'react-native'
import { useSelector } from '../core/StoreProvider'

export type SigninProviderProps = {
  Signin: React.FC;
  Home: React.FC;
}

export default function SigninProvider(props: SigninProviderProps) {
  const { Home, Signin } = props
  const [user, updateState]  = useSelector((state)=> state.user)
  if (user) {
    return (
      <Home />
    )
  }
  return (
    <Signin />
  )
}