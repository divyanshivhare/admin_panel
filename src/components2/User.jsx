import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utils/Context'

function User() {
    const {users, setUsers} = useContext(UserContext)

  return (
    <>
    <h1 className='text-3xl'>User List</h1>
    <div className='flex w-1/2 flex-col mt-10'>
        {users.map((u) =>(
            <Link key={u.id} to={`/user/${u.id}`} className='bg-blue-100 p-3 mb-3'>
                {u.username}
            </Link>
        ))}
        
    </div>
    </>
  )
}

export default User
