import axios from "axios"
import { useEffect, useState } from "react"

function useGetBlogs(url: string) {

    const [blogs, setBlogs] = useState(Array)

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