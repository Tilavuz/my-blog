import axios from "axios"
import useGetBlogs from "../../hooks/useGetBlogs"
import { useMemo, useState } from "react"


function BlogEditDelete() {

    const [isEdit, setIsEdit] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [editBlogData, setEditBlog] = useState({
        _id: '',
        title: '',
        author: '',
        desc: '',
        image: ''
    })

    const [addBlogData, setAddBlogData] = useState({
      title: '',
      author: '',
      desc: '',
      image: ''
  })

    const datas = useGetBlogs('https://tilav-blog-api.onrender.com/api/blogs')

    const blogs = useMemo(() => datas, [datas]);

    // Delete blog function
    async function deleteBlog(id: string) {
        const promptValue = confirm('Rostan ham bu post-ni o\'chirmoqchimisiz?')
        if(!promptValue) return
        try {
            await axios.delete(`https://tilav-blog-api.onrender.com/api/blog/${id}`, {
              headers: {
                'x-login-token': localStorage.getItem('token')
              }
            })
        }catch(err) {
            console.error(err);
        }
    }

    // Edit Blog function
    async function editBlog(id: string) {
        try {
            let formData;
            if (editBlogData.image instanceof File) {
                formData = new FormData();
                formData.append('image', editBlogData.image);
            } else {
                formData = new URLSearchParams();
                formData.append('image', editBlogData.image);
            }
    
            formData.append('title', editBlogData.title);
            formData.append('author', editBlogData.author);
            formData.append('desc', editBlogData.desc);
    
            await axios.put(`https://tilav-blog-api.onrender.com/api/blog/${id}`, formData, {
              headers: {
                'x-login-token': localStorage.getItem('token')
              }
            });
    
            setIsEdit(false);
        } catch (err) {
            console.error(err);
        }
    }
    

    // Handle edit blog inputs
    function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = e.target;
      setEditBlog((prev) => ({
          ...prev,
          [name]: value,
      }));
    }

    // Handle add blog inputs
    function handleAddInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = e.target;
        setAddBlogData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function addBlog() {
      try {
        let formData;
        if (addBlogData.image instanceof File) {
            formData = new FormData();
            formData.append('image', addBlogData.image);
        } else {
            formData = new URLSearchParams();
            formData.append('image', addBlogData.image);
        }

        formData.append('title', addBlogData.title);
        formData.append('author', addBlogData.author);
        formData.append('desc', addBlogData.desc);

        await axios.post('https://tilav-blog-api.onrender.com/api/blog', formData, {
          headers: {
            'x-login-token': localStorage.getItem('token')
          }
        })

      }catch(err) {
        console.error(err);
      }
    }

  return (
    <div className="bg-white px-2 flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:container lg:mx-auto lg:justify-between">
      {
        blogs?.map((blog: {_id: string, title: string, desc: string, image: string}, i:number) => {
          return (
            <div className={`cursor-pointer border-b-2 flex flex-col pb-2 ${i === 0 ? 'gap-2 mb-4' : 'gap-4 lg:w-6/13'} ${(blogs.length % 2 === 0  && blogs.length === i + 1) ? 'lg:w-screen' : ''}`} key={i}>
              <img className={`${i === 0 ? 'w-full md:w-96 lg:block' : 'w-40 lg:w-56 lg:h-auto'} rounded-lg ${blogs.length % 2 === 0 && blogs.length === i + 1 ? 'lg:w-96' : ''}`} src={`https://tilav-blog-api.onrender.com/${blog.image}`} alt={blog.title} />
              <div>
                <p className="line-clamp-1 font-bold text-xl">{blog.title}</p>
                <p className={`${i === 0 ? 'line-clamp-2 md:line-clamp-4 md:text-xl' : 'line-clamp-2'}`}>{blog.desc}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => {
                    setEditBlog(prev => {
                        return {
                            ...prev,
                            ...blog
                        }
                    })
                    setIsEdit(true)
                }} className="border-2 p-2 rounded-md text-black">Edit</button>
                <button onClick={() => deleteBlog(blog._id)} className="border-2 p-2 rounded-md bg-red-600 text-white">Delete</button>
              </div>
            </div>
          )
        })
      }
      {
        !isAdd && isEdit && (
            <div className="absolute inset-2/4 translate-x-[-50%] translate-y-[-50%] bg-bgColor2 w-[400px] h-[550px] flex flex-col gap-4 p-4 rounded-lg">
                <input type="file" placeholder="Image edit" onChange={(e) => handleInput({ target: { name: 'image', value: e.target.files[0] } })}/>
                <input value={editBlogData.title} className="border-2 py-1 px-2 rounded-md" name="title" type="text" placeholder="Title edit" onChange={handleInput}/>
                <input value={editBlogData.author} className="border-2 py-1 px-2 rounded-md" name="author" type="text" placeholder="Author edit" onChange={handleInput}/>
                <textarea cols={30} rows={10} value={editBlogData.desc} className="border-2 py-1 px-2 rounded-md" name="desc" placeholder="Desc edit" onChange={handleInput}/>
                <button type="button" className="border-2 p-1 rounded-md bg-slate-600 text-white" onClick={() => {
                    editBlog(editBlogData._id)
                    setIsEdit(false);
                }}>Edit</button>
                <button type="button" className="border-2 p-1 rounded-md bg-red-600 text-white" onClick={() => {
                    setIsEdit(false)
                }}>Exit</button>
            </div>
        )
      }
      {
        !isEdit && isAdd && (
          <div className="absolute inset-2/4 translate-x-[-50%] translate-y-[-50%] bg-bgColor2 w-[400px] h-[550px] flex flex-col gap-4 p-4 rounded-lg">
              <input type="file" placeholder="Image edit" onChange={(e) => handleAddInput({ target: { name: 'image', value: e.target.files[0] } })}/>
              <input value={addBlogData.title} className="border-2 py-1 px-2 rounded-md" name="title" type="text" placeholder="Title add" onChange={handleAddInput}/>
              <input value={addBlogData.author} className="border-2 py-1 px-2 rounded-md" name="author" type="text" placeholder="Author add" onChange={handleAddInput}/>
              <textarea cols={30} rows={10} value={addBlogData.desc} className="border-2 py-1 px-2 rounded-md" name="desc" placeholder="Desc add" onChange={handleAddInput}/>
              <button type="button" className="border-2 p-1 rounded-md bg-slate-600 text-white" onClick={() => {
                  addBlog()
                  setIsAdd(false);
              }}>Add</button>
              <button type="button" className="border-2 p-1 rounded-md bg-red-600 text-white" onClick={() => {
                  setIsAdd(false)
              }}>Exit</button>
          </div>
      )
      }
      <button onClick={() => {
          setIsAdd(!isAdd)
        }} className="absolute text-4xl rounded-full w-12 h-12 border-2 top-32 right-32 flex items-center justify-center">{`${isAdd ? '-' : '+'}`}</button>
    </div>
  )
}

export default BlogEditDelete