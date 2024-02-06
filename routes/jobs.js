const express=require('express');
const router=express.Router();

const {
    getJobs,
    getJob,
    newJob,
    updateJob,
    deleteJob
}=require('../controllers/jobsControllers');

router.route('/jobs').get(getJobs);
router.route('/job/:id/:slug').get(getJob);

router.route('/job/new').post(newJob);  
router.route('/jobs/:id').put(updateJob);

router.route('/jobs/:id').delete(deleteJob);

module.exports=router;