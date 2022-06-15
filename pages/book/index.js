import Link from 'next/link'
import Footer from '../footer'
import { useRouter } from 'next/router'
import Image from 'next/image'

import { useEffect, useState } from 'react'

const BookInfo = (props) => {
  const router = useRouter()
  let data = router.query
  // data = data.stringify()
  // data = data.replace(/\s/g, '')
  console.log(typeof data)

  const booksearch = `https://www.googleapis.com/books/v1/volumes?q=${data.title}&maxResults=1`

  const [bookData, setBookData] = useState({})
  const [imageUrl, setImageUrl] = useState(undefined)

  useEffect(async () => {
    await fetch(booksearch)
      .then((res) => res.json())
      .then((result) => {
        setBookData(result.items[0].volumeInfo)
        setImageUrl(result.items[0].volumeInfo.imageLinks.thumbnail)
      })
  }, [imageUrl])

  return (
    <div className="individual-book">
      <div className="top-bar">
        <Link href="/dashboard" className="register-back-btn">
          <a>{'<'}</a>
        </Link>
        <p>Book</p>
      </div>

      <section className="individual-book-info">
        <div className="book-image-container">
          {/* Book Image */}

          {imageUrl ? (
            <div
              className="book-image"
              alt={bookData.title}
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            ></div>
          ) : (
            <div className="book-image" alt={bookData.title}></div>
          )}
        </div>

        <h2 style={{ marginBottom: '0' }}>{bookData.title}</h2>
        <h3>{bookData.authors ? bookData.authors : bookData.publisher}</h3>
        <div>
          <div>
            <label>Year</label>
            <p>{bookData.publishedDate}</p>
          </div>
          <div>
            <label>Language</label>
            <p>{bookData.language}</p>
          </div>
          <div>
            <label>Page</label>
            <p>{bookData.pageCount}</p>
          </div>
        </div>

        <p>Description :</p>
        <p>{bookData.description}</p>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default BookInfo
