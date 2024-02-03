const job=require('../models/jobs');
exports.getJobs=(req,res,next)=>{
    res.status(200).json({
        success: true,
        requestMethod :req.requestMethod,
        message:'this route will display all jobs in future'
    });

}

exports.newJob=async (req,res,next)=>{
const jobs= await Job.create(req.body);
res.status(200).json({
    success:true,
    message:'job created',
    data:job
});
}