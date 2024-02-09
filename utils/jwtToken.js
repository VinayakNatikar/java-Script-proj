

const sendToken=(user,statusCode,res)=>{

    const token=user.getJwtToken();
        
    
    const options={
        expires:new Date(Date.now()+ process.env.COOKIE_EXPIRES_TIME *25*60*60*1000),
        httponly:true
        };
        res
        .status(statusCode)
        .cookie('token',token,options)
        .json({
            success:true,
            token

        })
}
module.exports = sendToken;