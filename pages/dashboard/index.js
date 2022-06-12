import Link from 'next/link'
import Footer from '../footer'
import Image from 'next/image'
// import { useEffect, useState } from 'react'
import { useAuth } from '../../firebase/authContext'

// JSON
import cpp from '../../books/cpp.json'
import dbms from '../../books/dbms.json'
import java from '../../books/java.json'
import js from '../../books/javascript.json'
import web from '../../books/webprog.json'

function Dashboard() {
  const { user, logout } = useAuth()

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
          <button onClick={logout}>LOGOUT</button>
        </div>

        {/* <input type="search" placeholder="Search a book or an author" /> */}
      </div>

      {/* MAIN */}
      <main className="dashboard-main">
        {/* New Books */}
        <div className="dashboard-title">
          <h2>Web Programming</h2>
          <Link href="/dashboard">
            <a>view all {'>'}</a>
          </Link>
        </div>
        <div className="dashboard-new-arrivals">
          <BookObject data={web.items[0]} />
          <BookObject data={web.items[1]} />
          <BookObject data={web.items[2]} />
          <BookObject data={web.items[3]} />
          <BookObject data={web.items[4]} />
        </div>

        {/* Books By Stream */}
        <div className="dashboard-title">
          <h2>Java</h2>
          <a href="#">view all {'>'}</a>
        </div>
        <div className="dashboard-stream">
          <BookObject data={cpp.items[0]} />
          <BookObject data={cpp.items[1]} />
          <BookObject data={cpp.items[2]} />
          <BookObject data={cpp.items[3]} />
          <BookObject data={cpp.items[4]} />
        </div>
      </main>

      {/* Footer */}
      <Footer></Footer>
    </div>
  )
}

const BookObject = (props) => {
  const image = props.data.volumeInfo.imageLinks.thumbnail
  const title = props.data.volumeInfo.title
  const author = props.data.volumeInfo.author
  const publisher = props.data.volumeInfo.publisher
  const ISBN_13_10 = props.data.volumeInfo.industryIdentifiers

  return (
    <Link href="/collection/book">
      <a>
        <div className="dashboard-books-card">
          <Image
            loader={() => image}
            src={image}
            width="160px"
            height="190px"
            unoptimized
          />

          <p>{title}</p>
        </div>
      </a>
    </Link>
  )
}
export default Dashboard
