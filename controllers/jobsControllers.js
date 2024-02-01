exports.getJobs=(req,res,next)=>{
    res.status(200).json({
        success: true,
        message:'this route will display all jobs in future'
    });
}