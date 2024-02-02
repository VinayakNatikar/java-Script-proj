// const mongoose=require('mongoose');

// const connectDatabase=()=>{mongoose.connect(process.env.DB_LOCAL_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
   
// })
// .then(con=>{
//     console.log(`MongoDb Database connected with host : ${con.connection.host}`);
// });
// };

// module.exports=connectDatabase;
const mongoose = require('mongoose');

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(con => {
    console.log(`MongoDB Database connected with host: ${con.connection.host}`);
  })
  .catch(err => {
    console.error(`Error connecting to MongoDB: ${err.message}`);
  });
};

module.exports = connectDatabase;