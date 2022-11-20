import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
  // const [pageNo, setPageNo] = useState(1)
  const [pageInfo, setPageInfo] = useState({ pageNo: 1, title: "" })
  return (
    <AuthContext.Provider value={{ pageInfo, setPageInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}