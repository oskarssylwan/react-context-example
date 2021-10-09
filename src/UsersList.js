import { useUsers } from './UsersDataProvider'

export const UsersList = () => {
  const { users } = useUsers()

  return (
    <>
      { users.map(name => <div key={name}>{name}</div>) }
    </>
  )
}
