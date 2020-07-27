import React from 'react'

export type SigninProviderProps = {
  Signin: React.FC;
  Home: React.FC;
}

export default function SigninProvider(props: SigninProviderProps) {
  const { Home, Signin } = props
  const [user, setUser] = React.useState(null)
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