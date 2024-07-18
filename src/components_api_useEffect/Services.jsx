import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'

function Services() {
    const [first, setFirst] = useState("This is normal data");
    const [second, setSecond] = useState("This is very large data");

    const getUsers = () => {
      // const api = "https://fakestoreapi.com/users";
  
      axios.get("/users")
      .then(users => {
        console.log(users);
      })
      .catch((err) => {console.log(err);})
    }
    
    useEffect(() => {
      console.log("Service component is created");
      getUsers();

        return () => {
            console.log("Service component is destroyed");
        }
    }, [second])  //[] k andar ke element ko update krenge to pura component refresh hoga 

  return (
    <div>
      <h1>{first}</h1>
      <button onClick={() => setFirst("Normal data has been changed")} className='mb-10 bg-red-200 p-2 rounded-md'>Change Normal Data</button>
      <br />
      <h1>{second}</h1>
      <button onClick={() => setSecond("Large data has been changed")} className='mb-10 bg-blue-200 p-2 rounded-md'>Change Large Data</button>
    </div>
  )
}

export default Services
