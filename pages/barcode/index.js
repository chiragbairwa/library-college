import dynamic from 'next/dynamic'
import Header from '../../components/header'
import { useRouter } from 'next/router'
import Footer from '../../components/footer'
import { useState } from 'react'
useState
const QrReader = dynamic(
  () => import('react-qr-barcode-scanner').then((mod) => mod.default),
  { ssr: false },
)

export default function Scanner() {
  const router = useRouter()
  const [torchOn, setTorchOn] = useState(false)
  const [data, setData] = useState('Searching...')

  return (
    <>
      {/* Header */}
      <Header headerName="ISBN Code Scanner"></Header>

      <div
        style={{
          paddingBottom: '10vh',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <QrReader
          torch={torchOn}
          delay="500"
          onUpdate={(err, result) => {
            if (result) {
              console.log(result)
              router.push({
                pathname: '/book',
                query: { title: result.text },
              })
            }
            if (err) {
              console.info(err)
            }
          }}
        />

        <p>{data}</p>
        <button onClick={() => setTorchOn(!torchOn)}>
          Switch Torch {torchOn ? 'Off' : 'On'}
        </button>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </>
  )
}
