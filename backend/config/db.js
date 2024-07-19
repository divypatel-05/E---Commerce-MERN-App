// const mongoose = require("mongoose")


// async function connectDB(){
//     try{
//         await mongoose.connect(process.env.MONGODB_URI)
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = connectDB



const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/Amazon")
        .then((data) => { console.log(`MongoDB connected with server.`); });
        // .catch((err) => { console.log(`MongoDB error: ${err}`); });
};

module.exports = connectDB;