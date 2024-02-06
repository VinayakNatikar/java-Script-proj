const express=require('express');
const app=express();

const dotenv=require('dotenv');

const connectDatabase=require('./config/database');
const errorMiddleware=require('./middlewares/errors')
const ErrorHandler=require('./utils/errorHandler');

dotenv.config({path : './config/config.env'  })

process.on('uncaughtException',err =>{
    console.log(`ERROR :${err.message}`);
    console.log('shutting down due to uncaught exception.');
    process.exit(1);
})

connectDatabase();

app.use(express.json());

const jobs=require('./routes/jobs');
app.use('/api/v1',jobs);

app.all('*',(req,res,next)=>{
    next(new ErrorHandler(`${req.originalUrl} route not found`,404));
});
app.use(errorMiddleware);
const PORT = process.env.PORT || 3000 ; 

const server=app.listen(PORT,() =>{
    console.log(`server started on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});

process.on('unhandledRejection',err =>{
console.log(`Error:${err.message}`);
console.log('shutting down the server due to handled promise rejection.');
server.close( ()=>{
    process.exit(1);
})

});
