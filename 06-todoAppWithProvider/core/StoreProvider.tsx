// import createUseProvider from './createUseProvider'
import createUseProviderHistory from 'unitx-ui/hooks/createUseProviderHistory'


export const {
  Provider,
  useSelector,
} = createUseProviderHistory({
  user: null as {
    username: string,
    password: string
  } | null,
  todoList: [] as string[]
})

// import React from 'react'
// import { AsyncStorage } from 'react-native'

// const StoreContext = React.createContext({
//   user: null,
//   todoList: []
// })

// export const useStore = () => {
//   const providerValue = React.useContext(StoreContext)
//   return providerValue
// }

// const STORE_KEY = 'STORE_KEY'

// export const StoreProvider = (props) => {
//   const [storeValue, setStoreValue] = React.useState({})
//   React.useEffect(() => {
//     AsyncStorage.getItem(STORE_KEY, (error, result)=> {
//       setStoreValue(result ? JSON.parse(result) : {})
//     })
//   }, [])
//   const setStore = React.useCallback((newStore) => {
//     const processedStore = { ...storeValue, ...newStore }
//     console.log('SET_STORE:', storeValue, newStore)
//     AsyncStorage.setItem(STORE_KEY, JSON.stringify(processedStore))
//     setStoreValue(processedStore)
//   }, [storeValue])
//   return (
//     <StoreContext.Provider  value={[storeValue, setStore]}>
//       {props.children}
//     </StoreContext.Provider>
//   )
// }