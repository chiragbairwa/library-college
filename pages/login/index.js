function Login() {
  return (
    <div className="auth-container">
      {/* <img src="/vercel.svg"></img> */}
      <div className="image">LOGO</div>
      {/* Create Account button*/}
      <a href="#" className="btn auth-options create-account-btn">
        Create account
      </a>

      {/* Login button */}
      <a href="#" className="btn auth-options login-btn">
        Login
      </a>

      {/* Additional Options */}
      <h5>Or continue with</h5>

      <div className="additional-option-container">
        <a href="#" className="btn facebook-btn">
          Facebook
        </a>
        <a href="#" className="btn">
          Google
        </a>
      </div>
    </div>
  )
}

function Register() {
  return (
    <>
      <img src="/vercel.svg"></img>

      {/* Create Account button*/}
      <a>Create account</a>

      {/* Login button */}
      <a>Login</a>

      {/* Additional Options */}
      <h5>Or continue with</h5>

      <a>Facebook</a>

      <a>Google</a>
    </>
  )
}

export default Login
