import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function Layout() {
  return (
    <div className='content pb-3 container-fluid p-3'>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout;