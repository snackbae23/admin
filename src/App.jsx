

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

import Admin from './pages/Admin'
import AllTNX from './pages/AllTNX'
import Merchant from './pages/Merchant'
import UserProfile from './pages/UserProfile'
import Blogs from './pages/Blogs'
// import {Routes,Route} from react

function App() {
  

  return (
    <>
      <div className='bg-emerald-300'>
        
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/alltnx' element={<AllTNX/>}></Route>
        <Route path='/merchant' element={<Merchant/>}></Route>
        <Route path='/userprofile' element={<UserProfile/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
