import { useState, useEffect } from 'react'

const Collection = () => {
  let borderLine = { borderBottom: '1px solid #4e6ee0' }

  const [feature, setFeature] = useState(borderLine)
  const [owned, setOwned] = useState({})
  const [reviews, setReviews] = useState({})

  let selected = 0
  useEffect(() => {}, [feature, owned, reviews])

  return (
    <div className="book-collection">
      <div className="top-bar">
        <a href="http://localhost:3000/login" className="register-back-btn">
          {'<'}
        </a>
        <p>Shelves Collection</p>
      </div>
      <div className="collection-tabs">
        <a
          href="#"
          className="collection-tab feature-tab"
          style={feature}
          onClick={() => {
            if (selected !== 1) {
              selected = 1

              setFeature(borderLine)
              setOwned({})
              setReviews({})
            }
          }}
        >
          Featured
        </a>
        <a
          href="#"
          className="collection-tab Owned-tab"
          style={owned}
          onClick={() => {
            if (selected !== 2) {
              selected = 2

              setFeature({})
              setOwned(borderLine)
              setReviews({})
            }
          }}
        >
          Owned
        </a>
        <a
          href="#"
          className="collection-tab reviews-tab"
          style={reviews}
          onClick={() => {
            if (selected !== 3) {
              selected = 3
              setFeature({})
              setOwned({})
              setReviews(borderLine)
            }
          }}
        >
          Reviews
        </a>
      </div>
    </div>
  )
}

export default Collection
