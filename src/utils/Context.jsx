import { createContext, useState } from "react";

export const UserContext = createContext();
function Context(props) {

    const[users, setUsers] = useState([
        {
          id:1,
          email:'John@gmail.com',
          username:'johnny',
          password:'m38rmF$',
          phone:'1-570-236-7033'
        },
        {
          id:2,
          email:'hgarc@gmail.com',
          username:'hary',
          password:'gfhs163',
        }
      ])

    return( 
        <UserContext.Provider value={{users, setUsers}}>
        {props.children}
        </UserContext.Provider>
)}

export default Context
