const router = require('express').Router()
const { adminMiddleware } = require('../middlewares/adminMiddleware')
const { addBlog, getBlogs, deleteBlog, updateBlog, getBlogById } = require('../controllers/blogController')
const upload = require('../middlewares/imageMiddleware')



// New Blog add
router.post('/blog', upload.single('image'), adminMiddleware, addBlog)

// Get blogs
router.get('/blogs', getBlogs)

// get blog by id
router.get('/blog/:id', getBlogById)

// Delete blog
router.delete('/blog/:id', adminMiddleware, deleteBlog)

// Update blog
router.put('/blog/:id', upload.single('image'), adminMiddleware, updateBlog)

module.exports = router