const router = require('express').Router()
const { addBlog, getBlogs, deleteBlog, updateBlog, getBlogById } = require('../controllers/blogController')
const upload = require('../middlewares/imageMiddleware')



// New Blog add
router.post('/blog', upload.single('image'), addBlog)

// Get blogs
router.get('/blogs', getBlogs)

// get blog by id
router.get('/blog/:id', getBlogById)

// Delete blog
router.delete('/blog/:id', deleteBlog)

// Update blog
router.put('/blog/:id', updateBlog)

module.exports = router