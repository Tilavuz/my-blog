const { Admin } = require('../models/adminModule')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// Jwt token generate
const generateJwtToken = (id) => {
    console.log(id);
    const token = jwt.sign({id}, '72tilavuz51', {expiresIn: '2d'})
    return token
}


const loginAdmin = async (req, res) => {

    try {
        const login = await Admin.findOne({name: req.body.name})

        if(!login) {
            res.status(400).json({ message: 'Sizga admin huquqi berilmagan' })
            return
        }

        const loginPwd = await bcrypt.compare(req.body.password, login.password)
        if(!loginPwd){
            res.status(400).json({message: 'Parolda xatolik bor'})
            return
        }

        const token = jwt.sign({_id: login._id, name: login.name}, '72tilavuz51')

        console.log(token);

        res.header('x-login-token', token).json({message: 'Malumot To\'g\'ri', type: true }).status(200)
        console.log(res);

    }catch (err) {
        console.log(err);
    }
}

// Admin qo'shish
const postAdmin = async (req, res) => {
    try {
        const admin = new Admin(req.body)
        const salt = await bcrypt.genSalt()
        admin.password = await bcrypt.hash(admin.password, salt)
        await admin.save()

        const token = generateJwtToken(admin._id)
        
        console.log(token);
        res.header('x-login-token', token).status(201).json({
            message: 'Admin ro\'yhatga qo\'shildi',
        })
    }catch(err) {
        res.status(400).json( { message: 'Admin ro\'yhatga olinmadi yoki bazada mavjut' })
    }
}

// Get admins
const getAdmin = async (req, res) => {
    console.log('worked');
    console.log(req);
    try {
        const admins = await Admin.find().sort({ createdAt: -1 });

        if (admins) {
            res.json(admins);
        } else {
            res.status(404).json({ msg: "Hozircha hech qanday adminlar qo'shilgan emas" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server xatosi" });
    }
}

// Delete admin
const deleteAdmin = async (req, res) => {
    const id = req.params.id;

    try {
        const admin = await Admin.findByIdAndDelete(id);

        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.json({ message: "Admin deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

// Put admin
const putAdmin = async (req, res) => {
    const id = req.params.id;

    try {
        const reqData = req.body;
        const salt = await bcrypt.genSalt()
        reqData.password = await bcrypt.hash(reqData.password, salt);
        const admin = await Admin.findByIdAndUpdate(id, reqData, { new: true });

        if (!admin) {
            return res.json({ message: 'Admin not found' });
        }

        admin.save()
        res.json({ message: 'Admin updated successfully', admin });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};




module.exports = { loginAdmin, postAdmin, getAdmin, deleteAdmin, putAdmin }