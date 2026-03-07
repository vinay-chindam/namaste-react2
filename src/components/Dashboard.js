import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (

    <>
    <div>Dashboard</div>
    <Outlet/>
    </>
    
  )
}

export default Dashboard