import Footer from '../footer'
import Header from '../header'

import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

const BookInfo = (props) => {
  const router = useRouter()
  let data = router.query

  let bookSearchId = data.title

  const booksearch = `https://www.googleapis.com/books/v1/volumes?q=${bookSearchId}&maxResults=1`

  const [bookData, setBookData] = useState({})
  const [imageUrl, setImageUrl] = useState(undefined)

  useEffect(async () => {
    await fetch(booksearch)
      .then((res) => res.json())
      .then((result) => {
        setBookData(result.items[0].volumeInfo)

        try {
          setImageUrl(result.items[0].volumeInfo.imageLinks.thumbnail)
        } catch (err) {
          setImageUrl(
            `http://books.google.com/books/content?id=XXdyQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
          )
        }
      })
  }, [imageUrl])

  return (
    <div className="individual-book">
      <Header headerName="Book" />

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
