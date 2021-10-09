import { useState } from 'react'
import { useUsers } from './UsersDataProvider'

export const AddUserForm = () => {
  const { addUser } = useUsers()
  const [name, setName] = useState('')

  const onAddUser = () => {
    addUser(name)
    setName('')
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <button onClick={onAddUser}>
        Add user
      </button>
    </div>
  )
}
