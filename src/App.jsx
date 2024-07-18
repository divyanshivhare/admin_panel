import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './project/Home'
import Details from './project/Details'
import Create from './project/Create'
import Edit from './project/Edit'

function App() {
  const {search, pathname} = useLocation();

  return (
    <div className='h-screen w-screen flex'>
      
      {(pathname != '/' || search.length > 0) && (
        <Link to='/' className='text-red-300 absolute left-[18%] top-[2%]'>Home</Link>
      )}
      
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/create' element = {<Create />} />
        <Route path='/details/:id' element = {<Details />} />
        <Route path='/edit/:id' element = {<Edit />} />
      </Routes>

    </div>
  )
}

export default App
