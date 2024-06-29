import { createContext, useContext, useState } from 'react'

const userContext = createContext(null)

export const userContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  const setUserContext = (data) => {
    setUserData(data)
  };

  return (
    <userContext.Provider value={{ userData, setUserContext }}>
      {children}
    </userContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(userContext)
}