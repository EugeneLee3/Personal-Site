import React from 'react'

function Login() {

  return (
    <div className="test">

      <form autocomplete="off" className="test">
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

        <button>Sign In</button>
      </form>

    </div>
  )
}

export default Login