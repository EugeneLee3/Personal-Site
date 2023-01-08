import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/project_display.css'

function Login() {
  return (
    <div className="test">
      <h1>Login</h1>

        <input
          required
          type="text"
          placeholder="username"
        />

        <input
          required
          type="password"
          placeholder="password"
        />

        <button>Login</button>
        <span>
          Don't you have an account? <Link to="/register">Register here</Link>
        </span>

    </div>
  )
}

export default Login