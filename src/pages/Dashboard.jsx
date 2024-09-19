import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function Dashboard() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer className={'w-full mx-auto bg-gray-300'}/>
    </>
  )
}

export default Dashboard