import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function SingleBlog() {

    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/blog/${id}`)
            .then(res => {
                setBlog(res.data)
            })
            .catch(err => {
                console.log('Malumot topilmadi', err);
            })
    }, [])

  return (
    <div className='flex flex-col gap-4 h-screen py-20 px-2'>
        {
          blog && (
            <>
              <div>
                <p className='font-bold text-xl'>Author: <span className='font-thin capitalize'>{blog.author}</span></p>
                <p>{blog.title}</p>
              </div>
              <img className='rounded-lg' src={`http://localhost:3000/${blog.image}`} alt={blog.title} />
              <p>{blog.desc}</p>
            </>
          )
        }
    </div>
  )
}

export default SingleBlog