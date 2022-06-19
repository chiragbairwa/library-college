import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/header.css'
import Head from 'next/head'
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
    <>
      <Head>
        <title>Library Genie</title>
        <meta
          name="description"
          content="A Library Genie is a project that show books information electronically according to students needs from Google Books API."
        />
        <meta name="keywords" content="Library, Google Books API"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AuthContextProvider>
        {noAuthRequired.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        )}
      </AuthContextProvider>
    </>
  )
}

export default MyApp
