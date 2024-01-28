import React from 'react'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (<>
    <Head/>
    <Sidebar/>
    <Outlet/>
    </>
  )
}

export default Layout