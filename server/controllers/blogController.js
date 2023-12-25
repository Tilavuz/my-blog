const { Blog, blogValid} = require('../models/blogModule')

// New blog add
const addBlog = async (req, res) => {
    const result = blogValid.validate(req.body)

    try {

        if(result.error) {
            return res.json("Malumot to'g'ri kelmadi")
        }

        const blog = new Blog(req.body)
        await blog.save()
        res.json(blog).status(201)

    }catch(err) {
        res.json({ msg: "Xatolik mavjut !" }).status(500)
    }
}

// Get blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ msg: "Xatolik mavjut !" });
    }
}

// Delete blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        if(!blog) {
            return res.status(404).json({ msg: "blog topilmadi." });
        }
        res.json({ blog, msg: "Malumot o'chirildi" }).status(200)
    }catch (err) {
        res.status(500).json({ msg: "Xatolik mavjut !" });
    }
}

// Update blog
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if(!blog) {
            return res.status(404).json({ msg: "Malumotni yangilab bo'lmadi." })
        }

        res.status(200).json(blog);
    }catch (err) {
        res.status(500).json({ msg: "Xatolik mavjut !" });
    }
}


module.exports = { addBlog, getBlogs, deleteBlog, updateBlog }