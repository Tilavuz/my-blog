const { loginAdmin, postAdmin, getAdmin, deleteAdmin, putAdmin } = require('../controllers/loginController')
const { adminMiddleware } =require('../middlewares/adminMiddleware')

const router = require('express').Router()


// Login admin
router.post('/login', loginAdmin)


// Add admin
router.post('/admin/add', postAdmin)

// Get admins
router.get('/admin/admins', getAdmin)

// Delete admin
router.delete('/admin/:id', deleteAdmin)

// Put admin
router.put('/admin/:id', putAdmin)


module.exports = router