import React from 'react'
import { AsyncStorage } from 'react-native'
import { useStore } from '../core/StoreProvider'

export type SigninProviderProps = {
  Signin: React.FC;
  Home: React.FC;
}

export default function SigninProvider(props: SigninProviderProps) {
  const { Home, Signin } = props
  const [store, setStore]  = useStore()
  console.log('Store:', store)
  if (store.user) {
    return (
      <Home />
    )
  }
  return (
    <Signin />
  )
}