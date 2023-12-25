const router = require('express').Router()
const { addBlog, getBlogs, deleteBlog, updateBlog } = require('../controllers/blogController')




// New Blog add
router.post('/blog', addBlog)


// Get blogs
router.get('/blog', getBlogs)


// Delete blog
router.delete('/blog/:id', deleteBlog)


// Update blog
router.put('/blog/:id', updateBlog)

module.exports = router