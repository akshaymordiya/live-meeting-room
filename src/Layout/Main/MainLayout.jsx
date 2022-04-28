import React,{ Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../../components/shared/Navigation/Navigation'

const MainLayout = () => {
  return (
     <Fragment>
       <Navigation />
       <Outlet />
     </Fragment>
  )
}

export default MainLayout