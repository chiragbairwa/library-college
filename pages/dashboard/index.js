import Link from 'next/link'
import Footer from '../footer'
import Image from 'next/image'

// JSON
import cpp from '../../books/cpp.json'
import dbms from '../../books/dbms.json'
import java from '../../books/java.json'
import js from '../../books/javascript.json'
import web from '../../books/webprog.json'

function Dashboard() {
  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
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
          <p>Web Programming</p>
          <Link
            href={{
              pathname: '/book/books',
              query: { subjectName: 'WebProgramming' },
            }}
          >
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

        {/* C */}
        <div className="dashboard-title">
          <p>C / C++</p>
          <Link
            href={{
              pathname: '/book/books',
              query: { subjectName: 'C/C++' },
            }}
          >
            <a>view all {'>'}</a>
          </Link>
        </div>
        <div className="dashboard-stream">
          <BookObject data={cpp.items[0]} />
          <BookObject data={cpp.items[1]} />
          <BookObject data={cpp.items[2]} />
          <BookObject data={cpp.items[3]} />
          <BookObject data={cpp.items[4]} />
        </div>

        {/* Cpp */}
        <div className="dashboard-title">
          <p>Java</p>
          <Link
            href={{
              pathname: '/book/books',
              query: { subjectName: 'Java' },
            }}
          >
            <a>view all {'>'}</a>
          </Link>
        </div>
        <div className="dashboard-stream">
          <BookObject data={java.items[0]} />
          <BookObject data={java.items[1]} />
          <BookObject data={java.items[2]} />
          <BookObject data={java.items[3]} />
          <BookObject data={java.items[4]} />
        </div>

        {/* Javascript */}
        <div className="dashboard-title">
          <p>Javascript</p>
          <Link
            href={{
              pathname: '/book/books',
              query: { subjectName: 'JavaScript' },
            }}
          >
            <a>view all {'>'}</a>
          </Link>
        </div>
        <div className="dashboard-stream">
          <BookObject data={js.items[0]} />
          <BookObject data={js.items[1]} />
          <BookObject data={js.items[2]} />
          <BookObject data={js.items[3]} />
          <BookObject data={js.items[4]} />
        </div>

        {/* DBMS */}
        <div className="dashboard-title">
          <p>DBMS</p>
          <Link
            href={{
              pathname: '/book/books',
              query: { subjectName: 'DBMS' },
            }}
          >
            <a>view all {'>'}</a>
          </Link>
        </div>
        <div className="dashboard-stream">
          <BookObject data={dbms.items[0]} />
          <BookObject data={dbms.items[2]} />
          <BookObject data={dbms.items[3]} />
          <BookObject data={dbms.items[4]} />
          <BookObject data={dbms.items[5]} />
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
            alt={title}
          />

          <p>{title}</p>
        </div>
      </a>
    </Link>
  )
}
export default Dashboard
