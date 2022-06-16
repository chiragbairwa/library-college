import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/header.css'

// Dashboard
import './dashboard/dashboard.css'

// Login
import './login/login.css'

// Collection
import './collection/collection.css'

// Book
import './book/book.css'

// Auth
import { useRouter } from 'next/router'
import { AuthContextProvider } from '../firebase/authContext'
import ProtectedRoute from '../firebase/protectedRoute'

const noAuthRequired = ['/login']

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  )
}

export default MyApp
