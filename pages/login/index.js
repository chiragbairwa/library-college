import { useEffect, useState } from 'react'

function Login() {
  const [value, setValue] = useState(1)

  useEffect(() => {}, [value])

  // if value true Login Or Register

  return value ? (
    <div className="auth-container">
      {/* <img src="/vercel.svg"></img> */}
      <div className="image">LOGO</div>
      <form className="login-form">
        <p>Login</p>
        <input type="email" className="input-field"></input>
        <br></br>
        <input type="password" className="input-field"></input>
      </form>

      {/* Login button */}
      <a href="#" className="btn login-btn">
        Login
      </a>

      {/* Create Account button*/}
      <a href="#" className="btn register-btn" onClick={() => setValue(!value)}>
        Register
      </a>

      {/* Additional Options */}
      <div
        style={{
          width: '40%',
          border: '0.5px solid #4e6ee0',
          margin: '16px 0',
        }}
      ></div>

      <a href="#" className="btn auth-options">
        Continue with Google
      </a>
    </div>
  ) : (
    <div className="register-container">
      <a
        href="#"
        className="register-back-btn"
        onClick={() => setValue(!value)}
      >
        {'<'}
      </a>
      <h2>Create account</h2>
      <p>Please fill the following details</p>

      <form className="register-form">
        <input type="text" className="input-field"></input>
        <input type="text" className="input-field"></input>
        <input type="text" className="input-field"></input>
        <input type="text" className="input-field"></input>

        <a
          href="#"
          className="btn register-btn"
          onClick={() => setValue(!value)}
        >
          Register
        </a>
      </form>
    </div>
  )
}

export default Login
