const  {connect,set} = require( 'mongoose');

set('strictQuery', true);
const connectDB = async (dbURI)=>{
    return await connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true});
}

module.exports =  connectDB;
