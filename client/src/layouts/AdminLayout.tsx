import AdminHeader from '../components/adminHeader/AdminHeader'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <div className='w-screen min-h-screen py-28 flex flex-col gap-8'>
      <AdminHeader />
      <Outlet />
    </div>
  )
}

export default RootLayout