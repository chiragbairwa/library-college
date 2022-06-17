import Link from 'next/link'

const Header = (props) => {
  return (
    <div className="header">
      <Link href="/dashboard">
        <a className="previous-page-btn">
          <svg fill="currentColor" width="24" height="24" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </a>
      </Link>
      <p>{props.headerName}</p>
    </div>
  )
}

export default Header
