import Footer from '../../components/footer'
import Header from '../../components/header'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import personalJson from '../../books/person.json'
import Image from 'next/image'

const Collection = () => {
  let selectedTab = { backgroundColor: 'var(--forth)' }

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
const BookObject = (props) => {
  const image = ''
  const title = ''
  try {
    image = props.data.volumeInfo.imageLinks.thumbnail
    title = props.data.volumeInfo.title
  } catch (err) {
    image =
      'http://books.google.com/books/content?id=XXdyQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  }

  return (
    <Link
      href={{
        pathname: '/book',
        query: props.data.volumeInfo,
      }}
      as={`/book?${title}`}
    >
      <a>
        <div className="dashboard-books-card">
          <Image
            loader={({ src: image }) => image}
            src={image}
            width="160px"
            height="190px"
            unoptimized
            alt={title}
          />

          <p>{title}</p>
        </div>
      </a>
    </Link>
  )
}

const Featured = () => {
  let fav_book_num = personalJson.items.length

  return (
    <>
      <div className="collection-heading">
        <span>Reading now</span>
        <span>{'3 books'}</span>
      </div>

      {/* Reading Books/ issued  */}
      <div className="reading-books-container">
        <BookObject data={personalJson.items[4]} />
        <BookObject data={personalJson.items[5]} />
        <BookObject data={personalJson.items[2]} />
      </div>

      {/* Favourites */}
      <div className="collection-heading">
        <span>Favourites</span>
        <span>{`${fav_book_num} books`}</span>
      </div>

      <div className="reading-books-container">
        {[...Array(fav_book_num)].map((e, i) => (
          <BookObject data={personalJson.items[i]} key={'FavCard' + i} />
        ))}
      </div>
    </>
  )
}

const Owned = () => {
  let number = 6
  return (
    <>
      <div className="collection-heading">
        <span>{number} books</span>
      </div>

      {/* Reading Books/ issued  */}
      <main className="owned-books">
        {[...Array(number)].map((e, i) => (
          <BookObject data={personalJson.items[i]} key={'OwnedCard' + i} />
        ))}
      </main>
    </>
  )
}

const Reviews = () => {
  let number = 4
  return (
    <>
      <div className="collection-heading">
        <span>{`${number} Reviews`}</span>
      </div>

      {/* Reviews */}
      <div className="reviews-cards">
        {[...Array(number)].map((e, i) => (
          <ReviewCard data={personalJson.items[i + 6]} key={'ReviewCard' + i} />
        ))}
      </div>
    </>
  )
}
const ReviewCard = (props) => {
  const image = ''
  const title = ''
  const date = 'Not Defined'
  const description = 'Not Defined'
  try {
    image = props.data.volumeInfo.imageLinks.thumbnail
    title = props.data.volumeInfo.title
    date = props.data.volumeInfo.publishedDate
    description = props.data.volumeInfo.description
  } catch (err) {
    image =
      'http://books.google.com/books/content?id=XXdyQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  }

  return (
    <Link
      href={{
        pathname: '/book',
        query: props.data.volumeInfo,
      }}
      as={`/book?${title}`}
    >
      <a>
        <div className="reviews-card">
          <div className="div-image">
            <Image
              loader={({ src: image }) => image}
              src={image}
              width="100%"
              height="120px"
              unoptimized
              alt={title}
            />
          </div>

          <div className="reviews-card-info">
            <p>{title}</p>
            <p>{`🌟🌟🌟🌟`}</p>
            <p
              style={{
                fontSize: '15px',
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}
export default Collection
