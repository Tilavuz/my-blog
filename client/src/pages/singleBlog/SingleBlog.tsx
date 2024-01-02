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
    <div className='flex flex-col gap-4 py-20 pb-24 px-2 lg:container lg:mx-auto lg:py-32'>
        {
          blog && (
            <>
              <div>
                <p className='font-bold text-xl lg:text-2xl'>Author: <span className='font-thin capitalize'>{blog.author}</span></p>
                <p className='font-bold text-xl lg:text-2xl'>Tittle: <span className='font-thin'>{blog.title}</span></p>
              </div>
              <img className='sm:w-96 md:w-1/2 xl:w-5/12 rounded-lg' src={`http://localhost:3000/${blog.image}`} alt={blog.title} />
              <p className='lg:text-xl'>{blog.desc}</p>
            </>
          )
        }
    </div>
  )
}

export default SingleBlog