const express=require('express');
const router=express.Router();

const {
    getJobs,
    getJob,
    newJob,
    updateJob,
    deleteJob
}=require('../controllers/jobsControllers');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');

router.route('/jobs').get(getJobs);
router.route('/job/:id/:slug').get(getJob);


router.route('/jobs/:id').put(isAuthenticatedUser,updateJob);
router.route('/jobs/new').post(isAuthenticatedUser,newJob);


router.route('/jobs/:id').delete(isAuthenticatedUser,deleteJob);

module.exports=router;