import { useState, useEffect } from 'react'

const Collection = () => {
  let borderLine = { borderBottom: '1px solid #4e6ee0' }

  const [feature, setFeature] = useState(borderLine)
  const [owned, setOwned] = useState({})
  const [reviews, setReviews] = useState({})

  const [selected, setSelected] = useState(1)

  useEffect(() => {}, [selected, feature, owned, reviews])

  return (
    <div className="book-collection">
      <div className="top-bar">
        <a href="http://localhost:3000/login" className="register-back-btn">
          {'<'}
        </a>
        <p>Shelves Collection</p>
      </div>
      <div className="collection-tabs">
        {/* Feature tab */}
        <a
          href="#"
          className="collection-tab feature-tab"
          style={feature}
          onClick={() => {
            if (selected !== 1) {
              setSelected(1)

              setFeature(borderLine)
              setOwned({})
              setReviews({})
            }
          }}
        >
          Featured
        </a>

        {/* Owned tab */}
        <a
          href="#"
          className="collection-tab Owned-tab"
          style={owned}
          onClick={() => {
            if (selected !== 2) {
              setSelected(2)

              setFeature({})
              setOwned(borderLine)
              setReviews({})
            }
          }}
        >
          Owned
        </a>

        {/* Reviews tab */}
        <a
          href="#"
          className="collection-tab reviews-tab"
          style={reviews}
          onClick={() => {
            if (selected !== 3) {
              setSelected(3)
              setFeature({})
              setOwned({})
              setReviews(borderLine)
            }
          }}
        >
          Reviews
        </a>
      </div>

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
    </div>
  )
}

const Featured = () => {
  return (
    <>
      <h4>Reading Now</h4>
      <span>5 books</span>

      {/* Reading Books/ issued  */}
      <div className="dashboard-new-arrivals">
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
      </div>

      {/* Favourites */}
      <h4>Favourites</h4>
      <span>5 books</span>

      <div className="dashboard-new-arrivals">
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
        <div className="new-arrivals-container">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
          <p>Author Name</p>
        </div>
      </div>
    </>
  )
}

const Owned = () => {
  return (
    <>
      <h4>3 books</h4>

      {/* Reading Books/ issued  */}
      <div className="owned-cards">
        <div className="owned-card">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
        </div>
        <div className="owned-card">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
        </div>
        <div className="owned-card">
          <img src="/vercel.svg" alt="Book Image" />
          <p>Book Name</p>
        </div>
      </div>
    </>
  )
}

const Reviews = () => {
  return (
    <>
      <h4>5 Reviews</h4>
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
