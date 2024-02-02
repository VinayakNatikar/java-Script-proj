const express=require('express');
const app=express();

const dotenv=require('dotenv');

const connectDatabase=require('./config/database');
dotenv.config({path : './config/config.env'  })

connectDatabase();

const jobs=require('./routes/jobs');
app.use(jobs);
const PORT = process.env.PORT || 3000 ; 

app.listen(PORT,() =>{
    console.log(`server started on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
