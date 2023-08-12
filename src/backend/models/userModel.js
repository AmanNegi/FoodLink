const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Your Name"]
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
      },
      password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
      }
})


// hash the password
userSchema.pre("save",async function(next){
    if(!this.isModified("password"))
    {
        next();
    }
    this.password = await bcrypt.hash(this.password,13);
})

// get jwt token
userSchema.methods.getJWTToken = function(){
    return jwt.sign(
        {id:this._id},
        "12345670-098lk@CSADFHD!@HDCZXCkkjqrzxcvbnmhjmuk",
        {
            expiresIn: "5d"
        }
    );
}

// compare passord 
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

module.exports = mongoose.model('User', userSchema);

