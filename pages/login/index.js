import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../../firebase/authContext'
import { auth } from '../../firebase/firebase'

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
    const { user, login, loginWithGoogle } = useAuth()

    const handleLogin = async (e) => {
      e.preventDefault()

      try {
        await login(loginInfo.email, loginInfo.password)
        router.push('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }

    const handleGoogle = async () => {
      try {
        await loginWithGoogle()
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

          <button type="submit" value="Login" className="btn login-btn">
            Login
          </button>
          <br></br>

          {/* Create Account button*/}
          <button
            onClick={() => setValue(!value)}
            defaultValue="Register"
            className="btn login-register-btn"
          >
            Register
          </button>
        </form>

        {/* Additional Options */}
        <div
          style={{
            width: '10rem',
            border: '0.5px solid #4e6ee0',
            margin: '16px 0',
          }}
        ></div>

        <button className="btn google-btn" onClick={handleGoogle}>
          Continue with Google
        </button>
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
        alert('SignUp Completed')
      } catch (err) {
        console.log(err)
      }
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
            value={registerInfo.name}
            onChange={(e) =>
              setregisterInfo({ ...registerInfo, name: e.target.value })
            }
            type="name"
            className="input-field"
            placeholder="Enter Username"
            required
          />
          <br></br>
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
