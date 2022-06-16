import Link from 'next/link'

const Header = (props) => {
  return (
    <div className="top-bar">
      <Link href="/dashboard" className="register-back-btn">
        <a>{'<'}</a>
      </Link>
      <p>{props.headerName}</p>
    </div>
  )
}

export default Header
