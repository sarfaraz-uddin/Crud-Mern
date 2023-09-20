import { useState } from 'react'
import './App.css'

//components
import NavBar from './components/NavBar'
import AddUser from './components/AddUser'
import SarfarazCrud from './components/SarfarazCrud'
import AllUsers from './components/AllUsers'

import { BrowserRouter,Routes,Route } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>  
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/all' element={<AllUsers/>}/>
      <Route path='/' element={<SarfarazCrud/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
