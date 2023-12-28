const { Blog, blogValid} = require('../models/blogModule')

// Get blog
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });

        if (blogs) {
            res.json(blogs);
        } else {
            res.status(404).json({ msg: "Hozircha hech qanday blog qo'shilgan emas" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server xatosi" });
    }
};

// Get blog by id
const getBlogById = async (req, res) => {
    try {
        const id = req.params.id
        const blog = await Blog.findById(id)

        if(blog) {
            return res.json(blog)
        }else {
            return res.status(404).json({ msg: "Blog topilmadi" });
        }
    }catch(err) {
        console.error(err);
        res.status(500).json({ msg: "Server xatosi" });
    }
}

// New blog add
const addBlog = async (req, res) => {
    const result = blogValid.validate(req.body)

    try {
        
        if(result.error) {
            return res.json("Malumot to'g'ri kelmadi")
        }

        const blog = new Blog({
            ...req.body,
            image: req.file.filename,
        });

        await blog.save()
        res.json(blog).status(201)

    }catch(err) {
        console.log(err);
        res.json({ msg: "Xatolik mavjut !", err}).status(500)
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


module.exports = { addBlog, getBlogs, deleteBlog, updateBlog, getBlogById }