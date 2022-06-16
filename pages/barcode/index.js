import dynamic from 'next/dynamic'
import Header from '../../components/header'
import { useRouter } from 'next/router'

const QrReader = dynamic(
  () => import('react-qr-reader').then((mod) => mod.QrReader),
  { ssr: false },
)

export default function Scanner() {
  const router = useRouter()

  return (
    <div className="barcode-scanner" style={{ padding: '16px' }}>
      {/* Header */}
      <Header headerName="ISBN Code Scanner"></Header>

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
    </div>
  )
}
