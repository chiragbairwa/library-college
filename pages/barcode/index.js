import { useState } from 'react'
import Book from '../book/index'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const QrReader = dynamic(
  () => import('react-qr-reader').then((mod) => mod.QrReader),
  { ssr: false },
)

export default function Scanner() {
  const [data, setData] = useState('')
  const [isIsbn, setIsbn] = useState(false)

  return isIsbn ? (
    <Book isbn={data} />
  ) : (
    <div className="barcode-scanner" style={{ padding: '16px' }}>
      {/* Header */}
      <div className="top-bar">
        <Link href="/dashboard">
          <a className="register-back-btn">{'<'}</a>
        </Link>
        <p>ISBN Code Scanner</p>
      </div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text)
            setIsbn(true)
          }

          if (!!error) {
            console.info(error)
          }
        }}
        style={{ width: '100px' }}
      />
    </div>
  )
}
