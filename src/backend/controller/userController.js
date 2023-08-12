const mongoose = require('mongoose')
const User = require('../models/userModel');
const getToken = require('../utils/jwtToken')


// create and register user
exports.registerUser = async (req,res)=>{
    const {name,email,password} = req.body;

    // create user
    const user = await User.create({
        name,
        email,
        password
    })

    // set the cookie and send response
    getToken(user,201,res);
    console.log('user registered successfully');
}


// user login
exports.loginUser = async (req,res,next)=>{
    const {email,password} = req.body;

    // check: is email and password are enterd 
    if(!email && !password)
    {
        return next(new Error("Please Enter Email and Password"))
    }

    // if email matched to db, then select the password for that particular email
    const user = await User.findOne({email}).select("password");

    // if enterd email is not present in the db
    if(!user)
    {
        return next(new Error("Invalid Email or Password"))
    }

    // check: entered password matched to the password in the db
    const isPasswordMatched = user.comparePassword(password);

    // if password not matched
    if(!isPasswordMatched)
    {
        return next(new Error("Invalid Email or Password"));
    }

    // get jwt token and save it to cookie for furture use
    getToken(user,201,res);
    console.log('login successful');
}


// logout user
exports.logoutUser = async(req,res)=>{
    
    // delete the token from cookie
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    
    res.status(201)
        .json({
            success:true,
            message:"user logged out successfully"
        })
        
    console.log('user logged out successfully')
}
