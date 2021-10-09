import React, { createContext, useContext, useState } from 'react'

const getDefaultUsersList = () => [
  'John Doe',
  'Jane Doe'
]

const UsersContext = createContext(getDefaultUsersList())

export const UsersDataProvider = props => {
  const [users, setUsers] = useState(getDefaultUsersList())

  const addUser = (name) => {
    setUsers(oldUsersList => [...oldUsersList, name])
  }

  return (
    <UsersContext.Provider value={{ users, addUser }} {...props} />
  )
}

export const useUsers = () => useContext(UsersContext)
