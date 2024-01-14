import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default RootLayout