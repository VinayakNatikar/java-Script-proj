// const mongoose = require('mongoose');

// const connectDatabase = () => {
//   mongoose.connect(process.env.DB_LOCAL_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(con => {
//     console.log(`MongoDB Database connected with host: ${con.connection.host}`);
//   })
//   .catch(err => {
//     console.error(`Error connecting to MongoDB: ${err.message}`);
//   });
// };

// module.exports = connectDatabase;
// const mongoose = require('mongoose');

// const connectDatabase = () => {
//   mongoose.connect(process.env.DB_LOCAL_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
    // useCreateIndex: true, // Add this line to enable index creation
    // useFindAndModify: false // Add this line to disable deprecated methods
//   })
//   .then(con => {
//     console.log(`MongoDB Database connected with host: ${con.connection.host}`);
//   });
//   .catch(err => {
//     console.error(`Error connecting to MongoDB: ${err.message}`);
//   });
// };

// module.exports = connectDatabase;
 const mongoose = require('mongoose');


const connectDatabase = () => {     mongoose.connect(process.env.DB_LOCAL_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
   // useCreateIndex : true
}).then(con => {
    console.log(`MongoDB Database connected with host: ${con.connection.host}`);
    });
 };


 module.exports = connectDatabase;
