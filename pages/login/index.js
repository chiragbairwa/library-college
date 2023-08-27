import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../../firebase/authContext'
import Image from 'next/image'
function Auth() {
  const [value, setValue] = useState(1)
  const router = useRouter()

  const { user } = useAuth()

  // if there is an user Redirect to Dashboard
  if (user) {
    router.push('/dashboard')
  }

  useEffect(() => {}, [])

  // LOGIN FUNCTION
  const Login = () => {
    const [loginInfo, setLoginInfo] = useState({
      email: '',
      password: '',
    })
    const router = useRouter()
    const { login } = useAuth()
    // const { user, loginWithGoogle } = useAuth()

    const handleLogin = async (e) => {
      e.preventDefault()

      try {
        await login(loginInfo.email, loginInfo.password)
        router.push('/dashboard')
      } catch (err) {
        console.log(err)
      }
    }

    // const handleGoogle = async () => {
    //   try {
    //     await loginWithGoogle()
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    return (
      <div className="login-container">
        <div className="image">
          <Image src="/login-dp.webp" width={100} height="100" alt="Library Logo"/>
          <p>Library Genie</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <p>Sign In</p>
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
          <button
            onClick={() => setValue(!value)}
            className="btn login-register-btn"
          >
            Sign Up
          </button>
        </form>

        {/* Additional Options
        <div
          style={{
            width: '10rem',
            border: '0.5px solid #4e6ee0',
            margin: '16px 0',
          }}
        ></div>

        <button className="btn google-btn" onClick={handleGoogle}>
          Continue with Google
        </button> */}
      </div>
    )
  }

  // Register Function
  const Register = () => {
    const { signup } = useAuth()

    const [registerInfo, setRegisterInfo] = useState({
      username: '',
      email: '',
      password: ''
    })

    const handleChange = (event) => {
      let key = event.target.name
      let value = event.target.value

      setRegisterInfo({...registerInfo, [key]:value})
    }

    const handleRegister = (e) => {
      e.preventDefault()

      signup(registerInfo.email, registerInfo.password)
      .then(()=>{
        setValue(!value)
        alert('SignUp Completed')
      })
      .catch((err)=>{
        console.log(err)
      })
    }

    return (
      <div className="register-container">
        <a className="register-back-btn" onClick={() => setValue(!value)}>
          {'<'}
        </a>
        <div>
          <h2>Create account</h2>
          <p>Please fill the following details</p>
        </div>

        <form onSubmit={handleRegister} className="register-form">
          <p>Register</p>

          <input
            onChange={handleChange}
            name="username"
            className="input-field"
            placeholder="Enter Username"
            required
          />
          <br></br>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className="input-field"
            placeholder="Enter Email"
            required
          />
          <br></br>

          <input
            value={registerInfo.password}
            onChange={handleChange}
            type="password"
            name="password"
            className="input-field"
            placeholder="Enter Password"
            required
          />
          <br></br>

          {/* Register button */}

          <input type="submit" className="btn register-btn" value="Register" />
        </form>
      </div>
    )
  }

  // if value true Login Or Register
  return (
    <div className="auth-container">{value ? <Login /> : <Register />}</div>
  )
}

export default Auth
