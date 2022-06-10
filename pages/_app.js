import '../styles/globals.css'
import '../styles/footer.css'

// Dashboard
import '../styles/dashboard/header.css'
import '../styles/dashboard/dashboard.css'

// Login
import './login/login.css'

// Auth
import './collection/collection.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
