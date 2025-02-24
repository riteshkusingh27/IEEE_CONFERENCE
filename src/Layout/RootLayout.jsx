import React from 'react'
import Header from '../Components/Header.jsx'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default RootLayout