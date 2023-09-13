import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AddUser from './components/AddUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
    </div>
  )
}

export default App
