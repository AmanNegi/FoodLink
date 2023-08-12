const express = require('express');
const router = express.Router();

const {registerUser, loginUser, logoutUser} = require('../controller/userController.js')
const {isAuthenticatedUser} = require('../middleware/auth')


router.get('/trial',(req,res)=>{
    return res.json({
        success:true,
        message:"it's working properly"
    })
})

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',isAuthenticatedUser,logoutUser);

module.exports  = router;