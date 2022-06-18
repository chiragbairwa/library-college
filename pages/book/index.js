import Footer from '../../components/footer'
import Header from '../../components/header'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import personalJson from '../../books/person.json'

const BookInfo = () => {
  const router = useRouter()
  let data = router.query

  let bookSearchId = data.title

  const booksearch = `https://www.googleapis.com/books/v1/volumes?q=${bookSearchId}&maxResults=1`
  const [rawBookData, setRawBookData] = useState({})
  const [bookData, setBookData] = useState({})
  const [imageUrl, setImageUrl] = useState(undefined)

  useEffect(() => {
    const apiFetch = async () =>
      await fetch(booksearch)
        .then((res) => res.json())
        .then((result) => {
          try {
            setBookData(result.items[0].volumeInfo)
            try {
              setRawBookData(result)
              setImageUrl(result.items[0].volumeInfo.imageLinks.thumbnail)
            } catch (err) {
              setImageUrl(
                `http://books.google.com/books/content?id=XXdyQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`,
              )
            }
          } catch (err) {
            router.push('/barcode')
            alert('Cannot Find the Book')
          }
        })

    apiFetch()
  }, [])

  const addToShelve = () => {
    personalJson.write
    personalJson.items.push(rawBookData.items[0])
  }

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
        <p>
          {bookData.description
            ? bookData.description
            : 'Description not provided'}
        </p>
        <button onClick={addToShelve}>Add To Shelve</button>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default BookInfo
