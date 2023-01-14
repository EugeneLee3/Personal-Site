import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/project_display.css'

function Login() {

  return (
    <div className="test">
      <h1>Login</h1>

        <form className="test">
          <input id="username"
            required
            type="text"
            placeholder="username"
          />

          <input id="password"
            required
            type="password"
            placeholder="password"
          />
        </form>

        <script>
          const getUsername = document.getElementById('username')
          const getPassword = document.getElementById('password')
        </script>

        <button>Login</button>
        <span>
          Don't you have an account? <Link to="/register">Register here</Link>
        </span>

    </div>
  )
}

export default Login