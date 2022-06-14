import Link from 'next/link'

const BookInfo = (props) => {
  const booksearch = `https://www.googleapis.com/books/v1/volumes?q=${props.isbn}&maxResults=1`

  return (
    <>
      <div className="top-bar">
        <Link href="#" replace className="register-back-btn">
          <a>{'<'}</a>
        </Link>
        <p>Shelves Collection</p>
      </div>

      <p>{props.isbn}</p>
    </>
  )
}

export default BookInfo
