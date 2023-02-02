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
        </form>

        <script>
          const getUsername = document.getElementById('username')
          const getPassword = document.getElementById('password')
        </script>

        <button>Login</button>

    </div>
  )
}

export default Login