
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
