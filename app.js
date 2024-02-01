<<<<<<< HEAD
const express=require('express');
const app=express();

const dotenv=require('dotenv');
dotenv.config({path : './config/config.env'  });

const jobs=require('./routes/jobs');
app.use(jobs);
const PORT = process.env.PORT || 3000 ; 

app.listen(PORT,() =>{
    console.log(`server started on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
=======
console.log('vinayak');
>>>>>>> 23a8e46d0260375bf8ec2044a51318f71f80456d
