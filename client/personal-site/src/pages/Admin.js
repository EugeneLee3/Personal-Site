import React,{useState} from 'react'
import Login from '../components/Login'

function Admin() {

    const [token, setToken] = useState();

    // if !(token) {

    // }

  return (
    <div>
        <Login />
    </div>
  )
}

export default Admin