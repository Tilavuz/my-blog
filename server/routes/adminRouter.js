const { loginAdmin, postAdmin, getAdmin, deleteAdmin, putAdmin } = require('../controllers/loginController')
const { adminMiddleware } =require('../middlewares/adminMiddleware')

const router = require('express').Router()


// Login admin
router.post('/login', loginAdmin)


// Add admin
router.post('/admin/add', adminMiddleware, postAdmin)

// Get admins
router.get('/admin/admins', adminMiddleware, getAdmin)

// Delete admin
router.delete('/admin/:id', adminMiddleware, deleteAdmin)

// Put admin
router.put('/admin/:id', adminMiddleware, putAdmin)


module.exports = router