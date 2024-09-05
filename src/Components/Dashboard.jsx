import React from 'react'
import { useAuth } from '../Contexts/Auth'

const Dashboard = () => {
    const {auth} =useAuth()
  return (
    <div className='h-screen place-content-center text-center'>
      Welcome to Your dashboard {auth.auth?.user?.firstName} {auth.auth?.user?.lastName}
    </div>
  )
}

export default Dashboard
