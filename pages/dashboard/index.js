import Footer from '../footer'
import Image from 'next/image'
import Link from 'next/link'

function Dashboard() {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()
  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <div className="dashboard-header-time">
          <p>{dd}&nbsp;</p>
          <p>{mm}&nbsp;</p>
          <p>{yyyy}&nbsp;</p>
        </div>
        <div>
          <div className="dashboard-header-search"></div>
          <div className="dashboard-header-profile"></div>
        </div>

        {/* <input type="search" placeholder="Search a book or an author" /> */}
      </div>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* New Books */}
        <div className="dashboard-title">
          <h2>New Arrivals</h2>
          <Link href="/collection">
            <a>view all {'>'}</a>
          </Link>
        </div>
        <div className="dashboard-new-arrivals">
          <BookImage></BookImage>
          <BookImage></BookImage>
          <BookImage></BookImage>
          <BookImage></BookImage>
        </div>

        {/* Books By Stream */}
        <div className="dashboard-title">
          <h2>Books by Streams</h2>
          <a href="#">view all {'>'}</a>
        </div>
        <div className="dashboard-stream">
          <BookImage></BookImage>
          <BookImage></BookImage>
          <BookImage></BookImage>
          <BookImage></BookImage>
        </div>

        {/* Books By Stream */}
        <div className="dashboard-title">
          <h2>Books by Streams</h2>
          <a href="#">view all {'>'}</a>
        </div>
        <div className="dashboard-stream">
          <BookImage></BookImage>
          <BookImage></BookImage>
          <BookImage></BookImage>
          <BookImage></BookImage>
        </div>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

const BookImage = () => {
  return (
    <Link href="/collection/book">
      <a>
        <div className="feature-books-card">
          {/* <Image src="/vercel.svg" width="300px" height="250px" /> */}
          <div></div>
          <p>Book Name</p>
          {/* <p>Author Name</p> */}
        </div>
      </a>
    </Link>
  )
}
export default Dashboard
