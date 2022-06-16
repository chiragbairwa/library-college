import dynamic from 'next/dynamic'
import Header from '../../components/header'
import { useRouter } from 'next/router'
import Footer from '../../components/footer'

const QrReader = dynamic(
  () => import('react-qr-reader').then((mod) => mod.QrReader),
  { ssr: false },
)

export default function Scanner() {
  const router = useRouter()

  return (
    <>
      {/* Header */}
      <Header headerName="ISBN Code Scanner"></Header>

      <div className="barcode-scanner" style={{ padding: '16px' }}>
        <QrReader
          constraints={{ facingMode: 'environment' }}
          onResult={(result, error) => {
            if (!!result) {
              console.log(result?.text)
              router.push({
                pathname: '/book',
                query: { title: result?.text },
              })
            }
            if (!!error) {
              console.info(error)
            }
          }}
          style={{ width: '100px' }}
        />
        {/* Footer */}
      </div>
      <Footer></Footer>
    </>
  )
}
