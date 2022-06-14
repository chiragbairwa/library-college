import React, { useState } from 'react'
import { useAuth } from '../../firebase/authContext'

export const MenuBar = () => {
  const { user, logout } = useAuth()

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
      <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
    </svg>
  )

  const [isOpen, setIsOpen] = useState(false)
  console.log(user)
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}></div>
      <button onClick={logout}>LOGOUT</button>
    </>
  )
}
