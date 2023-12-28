import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './layouts/RootLayout';

// Pages
import Blogs from "./pages/blogs/Blogs";
import Home from './pages/home/Home'
import Contact from "./pages/contact/Contact";
import SingleBlog from "./pages/singleBlog/SingleBlog";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/blogs',
          element: <Blogs />
        },
        {
          path: '/blog/:id',
          element: <SingleBlog />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App