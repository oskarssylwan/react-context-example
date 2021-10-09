import { UsersDataProvider } from './UsersDataProvider'
import { UsersList } from './UsersList'
import { AddUserForm } from './AddUserForm'

export const App = () => (
  <UsersDataProvider>
    <UsersList/>
    <AddUserForm/>
  </UsersDataProvider>
)
