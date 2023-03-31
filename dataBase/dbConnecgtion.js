import mongoose from "mongoose";


const dbConnection = ()=>{
    mongoose.connect(process.env.dbConnectionURL).then(()=>{
        console.log('connection is done');
    }).catch(()=>{
        console.log('error in connection');
    })
}

export default dbConnection