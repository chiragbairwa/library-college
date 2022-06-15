import Link from 'next/link'
import Footer from '../footer'
const BookInfo = (props) => {
  const booksearch = `https://www.googleapis.com/books/v1/volumes?q=${props.isbn}&maxResults=1`

  return (
    <div className="individual-book">
      <div className="top-bar">
        <Link href="#" replace className="register-back-btn">
          <a>{'<'}</a>
        </Link>
        <p>Book</p>
      </div>

      <div className="book-image-container">
        <div className="book-image"></div>
      </div>

      <section className="individual-book-info">
        <h2>{props.title}Name</h2>
        <h3>{props.author}Author</h3>
        <div>
          <div>
            <label>Year</label>
            <p>{props.year}2002</p>
          </div>
          <div>
            <label>Language</label>
            <p>{props.language}language</p>
          </div>
          <div>
            <label>Page</label>
            <p>{props.page}204</p>
          </div>
        </div>

        <p>Description :</p>
        <p>{props.description} scslkcsmk</p>
      </section>

      <Footer></Footer>
    </div>
  )
}

export default BookInfo
