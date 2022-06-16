import Link from 'next/link'
import Footer from '../../components/footer'
import { useState, useEffect } from 'react'
import Header from '../../components/header'

const Collection = () => {
  let selectedTab = { backgroundColor: 'rgb(132, 210, 184)' }

  const [feature, setFeature] = useState(selectedTab)
  const [owned, setOwned] = useState({})
  const [reviews, setReviews] = useState({})

  const [selected, setSelected] = useState(1)

  useEffect(() => {}, [selected, feature, owned, reviews])

  return (
    <div className="book-collection">
      {/* Header */}
      <Header headerName="Shelves Collection" />
      <div className="collection-tab-container">
        {/* Feature tab */}
        <a
          className="collection-tab feature-tab"
          style={feature}
          onClick={() => {
            if (selected !== 1) {
              setSelected(1)

              setFeature(selectedTab)
              setOwned({})
              setReviews({})
            }
          }}
        >
          Featured
        </a>

        {/* Owned tab */}
        <a
          className="collection-tab Owned-tab"
          style={owned}
          onClick={() => {
            if (selected !== 2) {
              setSelected(2)

              setFeature({})
              setOwned(selectedTab)
              setReviews({})
            }
          }}
        >
          Owned
        </a>

        {/* Reviews tab */}
        <a
          className="collection-tab reviews-tab"
          style={reviews}
          onClick={() => {
            if (selected !== 3) {
              setSelected(3)
              setFeature({})
              setOwned({})
              setReviews(selectedTab)
            }
          }}
        >
          Reviews
        </a>
      </div>

      {/* Rendering Tabs Content */}
      <div className="content">
        {selected == 1 ? (
          // Featured Content
          <Featured />
        ) : selected == 2 ? (
          // Owned Content
          <Owned />
        ) : (
          // Reviews Content
          <Reviews />
        )}
      </div>

      {/* Footer */}
      <Footer />
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

const Featured = () => {
  return (
    <>
      <div className="collection-heading">
        <span>Reading Now</span>
        <span>{'5 books >'}</span>
      </div>

      {/* Reading Books/ issued  */}
      <div className="reading-books-container">
        <BookImage></BookImage>
        <BookImage></BookImage>
        <BookImage></BookImage>
      </div>

      {/* Favourites */}
      <div className="collection-heading">
        <span>Favourites</span>
        <span>{'6 books >'}</span>
      </div>

      <div className="reading-books-container">
        <BookImage></BookImage>
        <BookImage></BookImage>
        <BookImage></BookImage>
        <BookImage></BookImage>
      </div>
    </>
  )
}

const Owned = () => {
  return (
    <>
      <div className="collection-heading">
        <span>3 books</span>
      </div>

      {/* Reading Books/ issued  */}
      <div className="owned-cards">
        <div className="owned-card">
          {/* <img src="/vercel.svg" alt="Book Image" /> */}
          <div></div>
          <p>Book Name</p>
        </div>
        <div className="owned-card">
          {/* <img src="/vercel.svg" alt="Book Image" /> */}
          <div></div>
          <p>Book Name</p>
        </div>
        <div className="owned-card">
          {/* <img src="/vercel.svg" alt="Book Image" /> */}
          <div></div>
          <p>Book Name</p>
        </div>
      </div>
    </>
  )
}

const Reviews = () => {
  return (
    <>
      <div className="collection-heading">
        <span>3 Reviews</span>
      </div>
      {/* Reviews */}
      <div className="reviews-cards">
        <div className="reviews-card">
          <div className="div-image"></div>

          <div className="reviews-card-info">
            <p>Book Name</p>
            <p>******25/10/2002</p>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className="reviews-card">
          <div className="div-image"></div>

          <div className="reviews-card-info">
            <p>Book Name</p>
            <p>******25/10/2002</p>
            <p>lorem ipsum</p>
          </div>
        </div>
        <div className="reviews-card">
          <div className="div-image"></div>
          <div className="reviews-card-info">
            <p>Book Name</p>
            <p>******25/10/2002</p>
            <p>lorem ipsum</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Collection
