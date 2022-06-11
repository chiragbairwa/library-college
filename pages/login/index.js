import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../../firebase/authContext'

function Auth() {
  const [value, setValue] = useState(1)

  useEffect(() => {}, [value])

  // LOGIN FUNCTION
  const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: '',
    })
    const router = useRouter()
    const { user, login } = useAuth()

    const handleLogin = async (e) => {
      e.preventDefault()

      try {
        await login(loginInfo.email, loginInfo.password)
        router.push('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }
    return (
      <div className="auth-container">
        {/* <img src="/vercel.svg"></img> */}
        <div className="image">LOGO</div>

        <form onSubmit={handleLogin} className="login-form">
          <p>Login</p>
          <input
            value={loginInfo.email}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, email: e.target.value })
            }
            type="email"
            className="input-field"
            placeholder="Enter Email"
            required
          />
          <br></br>

          <input
            value={loginInfo.password}
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            type="password"
            className="input-field"
            placeholder="Enter Password"
          />
          <br></br>

          {/* Login button */}

          <input type="submit" value="Login" className="btn login-btn" />
          <br></br>

          {/* Create Account button*/}
          <input
            onClick={() => setValue(!value)}
            className="btn"
            defaultValue="Register"
          />
        </form>

        {/* Additional Options */}
        <div
          style={{
            width: '10rem',
            border: '0.5px solid #4e6ee0',
            margin: '16px 0',
          }}
        ></div>

        <a href="#" className="btn auth-options">
          Continue with Google
        </a>
      </div>
    )
  }

  const Register = () => {
    const { user, signup } = useAuth()
    const [registerInfo, setregisterInfo] = useState({
      email: '',
      password: '',
      name: '',
    })

    const handleRegister = async (e) => {
      e.preventDefault()
      try {
        await signup(registerInfo.email, registerInfo.password)
        setValue(!value)
      } catch (err) {
        console.log(err)
      }
      console.log('SignUp Completed')
    }

    return (
      <div className="register-container">
        <a className="register-back-btn" onClick={() => setValue(!value)}>
          {'<'}
        </a>
        <h2>Create account</h2>
        <p>Please fill the following details</p>

        <form onSubmit={handleRegister} className="register-form">
          <p>Register</p>
          <input
            value={registerInfo.email}
            onChange={(e) =>
              setregisterInfo({ ...registerInfo, email: e.target.value })
            }
            type="email"
            className="input-field"
            placeholder="Enter Email"
            required
          />
          <br></br>

          <input
            value={registerInfo.password}
            onChange={(e) =>
              setregisterInfo({ ...registerInfo, password: e.target.value })
            }
            type="password"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <br></br>

          {/* Register button */}

          <input type="submit" value="Register" className="btn register-btn" />
        </form>
      </div>
    )
  }

  // if value true Login Or Register
  return value ? <Login /> : <Register />
}

export default Auth
