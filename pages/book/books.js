import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import cpp from '../../books/cpp.json'
import dbms from '../../books/dbms.json'
import java from '../../books/java.json'
import js from '../../books/javascript.json'
import web from '../../books/webprog.json'

const SubjectBooks = () => {
  const router = useRouter()
  const subject = router.query

  let data = {}
  switch (true) {
    case subject.subjectName === 'WebProgramming':
      data = web
      break
    case subject.subjectName === 'C/C++':
      data = cpp
      break
    case subject.subjectName === 'DBMS':
      data = dbms
      break
    case subject.subjectName === 'Java':
      data = java
      break
    case subject.subjectName === 'JavaScript':
      data = js
      break
  }
  return (
    <div className="book-collection">
      {/* Header */}
      <div className="top-bar">
        <Link href="/dashboard">
          <a className="register-back-btn">{'<'}</a>
        </Link>
        <p>{subject.subjectName} Books</p>
      </div>
      <div
        style={{
          marginLeft: '16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          rowGap: '16px',
        }}
      >
        {[...Array(40)].map((e, i) => (
          <BookObject
            data={data.items[i]}
            key={`${props.data.volumeInfo.title} + ${i}`}
          />
        ))}
      </div>
    </div>
  )
}

const BookObject = (props) => {
  let image
  let title
  let author
  let publisher
  let ISBN_13_10
  try {
    image = props.data.volumeInfo.imageLinks.thumbnail
    title = props.data.volumeInfo.title
    author = props.data.volumeInfo.author
    publisher = props.data.volumeInfo.publisher
    ISBN_13_10 = props.data.volumeInfo.industryIdentifiers
  } catch (err) {
    image = `http://books.google.com/books/content?id=XXdyQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api`
    title = 'Sample'
    author = 'Sample'
    publisher = 'Sample'
    ISBN_13_10 = 'Sample'
  }

  return (
    <Link href="/collection/book">
      <a>
        <div className="dashboard-books-card">
          <Image
            loader={() => image}
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

export default SubjectBooks
