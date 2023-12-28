import axios from "axios"
import { useEffect, useState } from "react"

function useGetBlogs(url) {

    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        try {
            axios.get(url)
                .then(res => {
                    setBlogs(res.data)
                })
        }catch(err) {
            console.log('Xatolik bor');
        }
    }, [url])

    return blogs
}


export default useGetBlogs