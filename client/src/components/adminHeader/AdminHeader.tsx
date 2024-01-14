import { NavLink } from 'react-router-dom'

function AdminHeader() {
  return (
    <nav className='flex gap-6'>
        <NavLink className='py-2 px-4 rounded-lg' to="admin-edit">Admins</NavLink>
        <NavLink className='py-2 px-4 rounded-lg' to="admin-blogs">Blogs</NavLink>
    </nav>
  )
}

export default AdminHeader