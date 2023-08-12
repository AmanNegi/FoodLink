// get token from here

// set token to the cookie 
const getToken = (user,statusCode,res)=>{

    const token = user.getJWTToken();

    const options = {
        expires: new Date(Date.now() + 5*24*60*60*1000),
        httpOnly:false
    }

    res
        .status(statusCode)
        .cookie("token",token)
        .json({
            success:true,
            user,
            token
        })
    
}

module.exports = getToken;