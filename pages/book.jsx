import Link from 'next/link'

const BookInfo = () => {
  return (
    <>
      <div className="top-bar">
        <Link href="#" replace className="register-back-btn">
          <a>{'<'}</a>
        </Link>
        <p>Shelves Collection</p>
      </div>
    </>
  )
}

export default BookInfo
