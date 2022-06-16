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
      <div>
        {/* Header */}
        <Header headerName="Shelves Collection" />

        <div className="collection-tab-container">
          {/* Feature tab */}
          <button
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
          </button>

          {/* Owned tab */}
          <button
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
          </button>

          {/* Reviews tab */}
          <button
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
          </button>
        </div>

        <main>
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
        </main>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}
const BookImage = () => {
  return (
    <Link href="/book">
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
        <span>Reading now</span>
        <span>{'5 books'}</span>
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
        <span>{'6 books'}</span>
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
  let number = 5
  return (
    <>
      <div className="collection-heading">
        <span>{number} books</span>
      </div>

      {/* Reading Books/ issued  */}
      <main className="owned-books">
        {[...Array(number)].map((e, i) => (
          <BookImage />
        ))}
      </main>
    </>
  )
}

const Reviews = () => {
  const ReviewCard = () => (
    <div className="reviews-card">
      <div className="div-image"></div>

      <div className="reviews-card-info">
        <p>Book Name</p>
        <p>******25/10/2002</p>
        <p>lorem ipsum</p>
      </div>
    </div>
  )

  let number = 5
  return (
    <>
      <div className="collection-heading">
        <span>3 Reviews</span>
      </div>

      {/* Reviews */}
      <div className="reviews-cards">
        {[...Array(number)].map((e, i) => (
          <ReviewCard />
        ))}
      </div>
    </>
  )
}
export default Collection
