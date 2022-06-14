import React, { useState } from 'react'

import { slide as Burger, SubMenu, Item } from 'burger-menu'
import 'burger-menu/lib/index.css'

import menuIcon from '../../public/menu.svg'
import { useAuth } from '../../firebase/authContext'

export const MenuBar = () => {
  const { user, logout } = useAuth()
  const menuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28">
      <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
    </svg>
  )

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
        </svg>
      </div>
      <Burger
        className="burger-menu"
        isOpen={isOpen}
        selectedKey={'entry'}
        onClose={() => setIsOpen(false)}
        customCrossIcon={
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" />
          </svg>
        }
      >
        <button onClick={logout}>LOGOUT</button>

        <Item itemKey={'user'} text={'User Center'}></Item>
        <SubMenu title="Union Management">
          <Item itemKey={'notice'} text={'Announcement'}></Item>
          <Item itemKey={'union'} text={'Union Inquiries'}></Item>
          <Item itemKey={'entry'} text={'Entry information'}></Item>
        </SubMenu>
      </Burger>
    </>
  )
}
