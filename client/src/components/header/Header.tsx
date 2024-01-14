import { NavLink } from "react-router-dom"

function Header() {
  return (
    <header className="w-full top-0 left-0 py-4 border-b-2 fixed bg-bgColor z-999">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-3xl font-bold text-black">tilav.<span className="text-lg">uz</span></a>
            <ul className="flex z-999 font-medium fixed bottom-0 bg-bgColor border-t-2 left-0 justify-around p-2 w-full md:static md:border-0 md:w-auto">
              <li><NavLink className='px-4 py-2 rounded-2xl flex items-center justify-center' to='/'>Home</NavLink></li>
              <li><NavLink className='px-4 py-2 rounded-2xl flex items-center justify-center' to='/blogs'>Blogs</NavLink></li>
              <li><NavLink className='px-4 py-2 rounded-2xl flex items-center justify-center' to='/contact'>Contact</NavLink></li>
            </ul>
          </div>
        </div>
    </header>
  )
}

export default Header