import React, { useContext } from 'react'
import { UserContext } from '../utils/Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
  const navigate = useNavigate();
  const {id} = useParams()
  const {users} = useContext(UserContext)
  console.log(users[id-1])
  return (
    <div>
      <h1 className='text-red-200 text-4xl bold'>{users[id-1].username}</h1>
      <h3 className='text-red-300'>{users[id-1].email}</h3>
      <button onClick={() => navigate(-1)} className='mt-5 bg-red-100 p-2 rounded-md'>Go back</button>
    </div>
  )
}

export default UserDetails
