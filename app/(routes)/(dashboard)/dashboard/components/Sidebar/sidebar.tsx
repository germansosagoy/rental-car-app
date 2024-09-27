import React from 'react'
import LogoDashboard from '../LogoDashboard/LogoDashboard'
import SidebarRoutes from '../SidebarRoutes/SidebarRoutes'

export default function Sidebar() {
  return (
    <div className='h-screen'>
      <div className='flex flex-col h-full w-full border-r'>
        <LogoDashboard/>
        <SidebarRoutes/>
      </div>
    </div>
  )
}
