import { NavLink } from "react-router-dom"
import useGetBlogs from "../../hooks/useGetBlogs"

interface BlogData {
  _id: string;
  title: string;
  author: string;
  desc: string;
  image: string; 
}

function Blog() {

  const datas = useGetBlogs('https://tilav-blog-api.onrender.com/api/blogs')

  const blogs: BlogData[] = datas as BlogData[]

  return (
    <div className="bg-white py-20 md:py-24 px-2 flex flex-col gap-4 lg:flex-row lg:py-32 lg:flex-wrap lg:container lg:mx-auto lg:justify-between">
      {
        blogs?.map((blog: BlogData, i: number) => {
          return (
            <NavLink to={`/blog/${blog._id}`} className={`block cursor-pointer border-b-2 pb-2 ${i === 0 ? 'flex flex-col gap-2 mb-4 md:flex-row' : 'flex gap-4 lg:w-6/13'} ${(blogs.length % 2 === 0  && blogs.length === i + 1) ? 'lg:w-screen' : ''}`} key={i}>
              <img className={`${i === 0 ? 'w-full md:w-96 lg:block' : 'w-40 lg:w-56 lg:h-auto'} rounded-lg ${blogs.length % 2 === 0 && blogs.length === i + 1 ? 'lg:w-96' : ''}`} src={`https://tilav-blog-api.onrender.com/${blog.image}`} alt={blog.title} />
              <div>
                <p className="line-clamp-1 font-bold text-xl">{blog.title}</p>
                <p className={`${i === 0 ? 'line-clamp-2 md:line-clamp-4 md:text-xl' : 'line-clamp-2'}`}>{blog.desc}</p>
              </div>
            </NavLink>
          )
        })
      }
    </div>
  )
}

export default Blog