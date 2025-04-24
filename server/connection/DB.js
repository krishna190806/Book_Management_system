const mongoose=require('mongoose');

const dotenv=require('dotenv');
dotenv.config();

const connectionWithDB=()=>{
    
mongoose
.connect( process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(function(db){
    console.log("__ DB CONNECTED __");
})
.catch(function(err){
    console.log(err);
})

}

module.exports= connectionWithDB;
